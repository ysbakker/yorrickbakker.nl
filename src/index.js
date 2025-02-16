const INTERVAL_DELAY = 5000;

const DIST_REACTIVITY_THRESHOLD = 100
const DIST_OUT_OF_RANGE = 250
const MOUSE_REACTIVITY_MULTIPLIER = 4
let charElements = [];
let elementTransforms = [];

const charItUp = (el) => {
  const elHtml = el.innerHTML;

  const chars = [...elHtml].map(c => {
    const el = document.createElement('span');
    el.style.display = 'inline-block';
    el.style.whiteSpace = 'pre';
    el.innerText = c;
    return el;
  });

  const transforms = [...elHtml].map(_ => [0, 0])

  el.innerText = ''
  chars.forEach(c => el.appendChild(c));

  charElements = charElements.concat(chars)
  elementTransforms = elementTransforms.concat(transforms)
}

(() => {
  const nameElement = document.getElementById('name');
  const titleElement = document.getElementById('title');
  if (!nameElement || !titleElement) {
    return;
  }

  charItUp(nameElement)
  charItUp(titleElement)

  console.log(charElements)
})();

const onMouseMove = (event) => {
  for (const char of charElements) {
    moveAwayFromMouse(char, event)
  }
}

const moveAwayFromMouse = (el, event) => {
  if (!el) {
    return
  }

  let transformX = elementTransforms[charElements.indexOf(el)][0]
  let transformY = elementTransforms[charElements.indexOf(el)][1]

  const charRect = el.getBoundingClientRect();

  // Determine if mouse is close enough to character
  const { clientX: mouseX, clientY: mouseY } = event

  const { x, y, width, height } = charRect
  const centerX = x + width / 2
  const centerY = y + height / 2

  const dist = Math.sqrt(Math.pow(Math.abs(centerX - mouseX), 2) + Math.pow(Math.abs(centerY - mouseY), 2))

  if (dist > DIST_OUT_OF_RANGE && transformX !== 0 && transformY !== 0) {
    // Reset transform
    transformX = 0;
    transformY = 0;
    el.style.transition = 'transform .5s'
    setTimeout(() => {
      el.style.transition = 'none'
    }, 500)
    applyTransform(el, transformX, transformY)
    return;
  }

  if (dist > DIST_REACTIVITY_THRESHOLD) {
    return
  }

  // Apply negative force on character
  const inverseDist = (1 / Math.max(dist, 1)) * MOUSE_REACTIVITY_MULTIPLIER;

  const dx = mouseX - centerX
  const dy = mouseY - centerY
  transformX -= (dx < 0 ? Math.floor(dx) : Math.ceil(dx)) * inverseDist
  transformY -= (dy < 0 ? Math.floor(dy) : Math.ceil(dy)) * inverseDist
  applyTransform(el, transformX, transformY)
}

const applyTransform = (el, x, y) => {
  el.style.transform = `translate(${x}px, ${y}px)`
  elementTransforms[charElements.indexOf(el)][0] = x
  elementTransforms[charElements.indexOf(el)][1] = y
}

document.addEventListener('mousemove', onMouseMove)
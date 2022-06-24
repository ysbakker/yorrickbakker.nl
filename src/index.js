(() => {
  const INTERVAL_DELAY = 5000;
  const nameElement = document.getElementById('name');
  const name = nameElement.innerHTML;

  const charElements = [...name].map(c => {
    const el = document.createElement('span');
    el.style.display = 'inline-block';
    el.style.whiteSpace = 'pre';
    el.innerText = c;
    return el;
  });

  nameElement.innerText = ''
  charElements.forEach(el => nameElement.appendChild(el));

  setInterval(() => {
    animateRandom(charElements)
  }, INTERVAL_DELAY)
})();

/**
 * 
 * @param {HTMLSpanElement[]} elements 
 */
const animateRandom = (elements) => {
  const index = Math.floor(Math.random() * elements.length);
  const animation = animationFunctions[Math.floor(Math.random() * animationFunctions.length)];
  console.log(animation.name, index)

  if (elements[index].textContent === ' ') return animateRandom(elements)
  animation(elements[index]);
};

/**
 * 
 * @param {HTMLSpanElement} element 
 */
const bounce = (element) => {
  anime.timeline().add({
    targets: element,
    translateY: -40,
    duration: 150,
    easing: 'easeOutQuad'
  }).add({
    targets: element,
    translateY: 0,
    duration: 750,
    easing: 'easeOutBounce'
  });
}

/**
 * 
 * @param {HTMLSpanElement} element 
 */
const rotate = (element) => {
  anime({
    targets: element,
    rotate: [0, 360],
    duration: 2000,
  });
}

/**
 * 
 * @param {HTMLSpanElement} element 
 */
const magnify = (element) => {
  anime.timeline().add({
    targets: element,
    scale: 2,
    duration: 600,
    easing: 'easeOutQuad'
  }).add({
    targets: element,
    scale: 1,
    duration: 300,
    easing: 'easeOutBack'
  });
}

const animationFunctions = [
  bounce,
  rotate,
  magnify,
]
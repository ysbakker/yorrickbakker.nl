import produce from 'immer'

const messages = produce((draft, action) => {
  const { type, payload } = action
  switch (type) {
    case '':
      break
  }
}, {})

export default messages

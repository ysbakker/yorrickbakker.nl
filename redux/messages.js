import produce from 'immer'

const TOGGLE_FETCHING = 'Toggle fetching messages'

export const sendMessage = message => {
  return async dispatch => {
    dispatch(toggleFetching(true))
  }
}

const toggleFetching = isFetching => ({
  type: TOGGLE_FETCHING,
  payload: isFetching,
})

export const fetchMessages = () => {
  return async dispatch => {}
}

const messages = produce(
  (draft, action) => {
    const { type, payload } = action
    switch (type) {
      case TOGGLE_FETCHING:
        draft.fetching = payload || !draft.fetching
        break
    }
  },
  {
    fetching: false,
    data: [],
  }
)

export default messages

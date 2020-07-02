import produce from 'immer'

const TOGGLE_FETCHING = 'Toggle fetching messages'
const SET_FETCHING_SUCCESSFUL = 'Set fetching messages successful'
const SET_MESSAGES = 'Set messages'

export const sendMessage = message => {
  return async dispatch => {
    dispatch(setFetchingSuccessful(null))
    dispatch(toggleFetching(true))

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
      if (!res.ok) throw new Error('Could not process request')
      dispatch(setFetchingSuccessful(true))
    } catch (e) {
      dispatch(setFetchingSuccessful(false))
    }

    dispatch(toggleFetching(false))
  }
}

export const fetchMessages = () => {
  return async dispatch => {
    dispatch(toggleFetching(true))

    const messages = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`)
    ).json()
    dispatch(setMessages(messages))

    dispatch(toggleFetching(false))
  }
}

const toggleFetching = isFetching => ({
  type: TOGGLE_FETCHING,
  payload: isFetching,
})

const setFetchingSuccessful = isSuccessful => ({
  type: SET_FETCHING_SUCCESSFUL,
  payload: isSuccessful,
})

const setMessages = messages => ({
  type: SET_MESSAGES,
  payload: messages,
})

const messages = produce(
  (draft, action) => {
    const { type, payload } = action
    switch (type) {
      case TOGGLE_FETCHING:
        draft.fetching = payload || !draft.fetching
        break
      case SET_FETCHING_SUCCESSFUL:
        draft.success = payload
        break
      case SET_MESSAGES:
        draft.data = payload
    }
  },
  {
    fetching: false,
    success: null,
    data: [],
  }
)

export default messages

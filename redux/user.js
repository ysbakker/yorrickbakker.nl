import produce from 'immer'

const FETCHING = 'Invoking authentication endpoint'
const AUTHORIZED = 'Set user authorized status'

const getSession = () => {
  return async dispatch => {
    dispatch(fetching(true))

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/`)
    dispatch(fetching(false))

    if (res.ok) dispatch(authorized(true))
    else dispatch(authorized(false))
  }
}

const fetching = isFetching => ({
  type: FETCHING,
  payload: isFetching,
})

const authorized = isAuthorized => ({
  type: AUTHORIZED,
  payload: isAuthorized,
})

const user = produce(
  (draft, action) => {
    const { type, payload } = action
    switch (type) {
      case FETCHING:
        draft.fetching = payload || !draft.fetching
        break
      case AUTHORIZED:
        draft.authorized = payload
        break
    }
  },
  {
    authorized: false,
    fetching: false,
  }
)

export default user

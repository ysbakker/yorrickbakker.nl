import produce from 'immer'

const FETCHING = 'Invoking authentication endpoint'
const AUTHORIZED = 'Set user authorized status'

export const getSession = () => {
  return async dispatch => {
    dispatch(authorized(false))
    dispatch(fetching(true))

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/`, {
      credentials: 'include',
    })
    dispatch(fetching(false))

    if (res.ok) dispatch(authorized(true))
  }
}

export const login = user => {
  return async dispatch => {
    dispatch(authorized(false))
    dispatch(fetching(true))

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (res.ok) dispatch(authorized(true))

    dispatch(fetching(false))
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

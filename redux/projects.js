import produce from 'immer'

const FETCHING_PROJECTS = 'Fetching projects'
const FETCHING_SUCCESS = 'Fetching success'
const SET_PROJECTS = 'Set projects'

export const fetchProjects = () => {
  return async dispatch => {
    dispatch(success(null))
    dispatch(fetching(true))

    try {
      const projects = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      ).json()
      dispatch(setProjects(projects))
      dispatch(success(true))
    } catch (e) {
      dispatch(success(false))
    }

    dispatch(fetching(false))
  }
}

const fetching = isFetching => ({
  type: FETCHING_PROJECTS,
  payload: isFetching,
})

const success = fetchSuccesful => ({
  type: FETCHING_SUCCESS,
  payload: fetchSuccesful,
})

const setProjects = projects => ({
  type: SET_PROJECTS,
  payload: projects,
})

const projects = produce(
  (draft, action) => {
    const { type, payload } = action
    switch (type) {
      case FETCHING_PROJECTS:
        draft.fetching = payload
        break
      case SET_PROJECTS:
        draft.data = payload
        break
      case FETCHING_SUCCESS:
        draft.success = payload
        break
    }
  },
  {
    fetching: false,
    success: null,
    data: [],
  }
)

export default projects

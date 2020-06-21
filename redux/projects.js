import produce from 'immer'

const FETCHING_PROJECTS = 'Fetching projects'
const SET_PROJECTS = 'Set projects'

export const fetchProjects = () => {
  return async dispatch => {
    dispatch(fetching(true))

    const projects = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
    ).json()
    dispatch(setProjects(projects))

    dispatch(fetching(false))
  }
}

const fetching = isFetching => ({
  type: FETCHING_PROJECTS,
  payload: isFetching,
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
        return
      case SET_PROJECTS:
        draft.data = payload
        return
    }
  },
  {
    fetching: false,
    data: [],
  }
)

export default projects

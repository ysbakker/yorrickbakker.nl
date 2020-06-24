import produce from 'immer'

const FETCHING_PROJECTS = 'Fetching projects'
const FETCHING_SUCCESS = 'Fetching success'
const SET_PROJECTS = 'Set projects'
const TOGGLE_DELETE_MODAL = 'Toggle delete project modal'
const SET_DELETE_MODAL_PROJECT = 'Set delete project modal project'
const DELETING_PROJECT = 'Set deleting project status'
const TOGGLE_EDIT_MODAL = 'Toggle edit project modal'
const SET_EDIT_MODAL_PROJECT = 'Set edit project modal project'

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

export const deleteProject = project => {
  return async dispatch => {
    dispatch(deletingProject(true))

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${project._id}`, {
      method: 'DELETE',
    })

    dispatch(deletingProject(false))
    dispatch(toggleDeleteModal(false))
    dispatch(fetchProjects())
  }
}

export const toggleDeleteModal = isVisible => ({
  type: TOGGLE_DELETE_MODAL,
  payload: isVisible,
})

export const setDeleteModalProject = project => ({
  type: SET_DELETE_MODAL_PROJECT,
  payload: project,
})

const deletingProject = isDeleting => ({
  type: DELETING_PROJECT,
  payload: isDeleting,
})

export const updateProject = project => {
  return async dispatch => {}
}

export const toggleEditModal = isVisible => ({
  type: TOGGLE_EDIT_MODAL,
  payload: isVisible,
})

export const setEditModalProject = project => ({
  type: SET_EDIT_MODAL_PROJECT,
  payload: project,
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
      case TOGGLE_DELETE_MODAL:
        draft.deleteModal.visible = payload || !draft.deleteModal.visible
        break
      case SET_DELETE_MODAL_PROJECT:
        draft.deleteModal.project = payload || {}
        break
      case DELETING_PROJECT:
        draft.deleteModal.deleting = payload
        break
      case TOGGLE_EDIT_MODAL:
        draft.editModal.visible = payload || !draft.editModal.visible
        break
      case SET_EDIT_MODAL_PROJECT:
        draft.editModal.project = payload || {}
        break
    }
  },
  {
    fetching: false,
    success: null,
    data: [],
    deleteModal: {
      visible: false,
      deleting: false,
      project: {},
    },
    editModal: {
      visible: false,
      updating: false,
      project: {},
    },
  }
)

export default projects

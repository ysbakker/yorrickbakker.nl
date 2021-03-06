import produce from 'immer'

const FETCHING_PROJECTS = 'Fetching projects'
const FETCHING_SUCCESS = 'Fetching success'
const SET_PROJECTS = 'Set projects'
const TOGGLE_DELETE_MODAL = 'Toggle delete project modal'
const SET_DELETE_MODAL_PROJECT = 'Set delete project modal project'
const DELETING_PROJECT = 'Set deleting project status'
const TOGGLE_EDIT_MODAL = 'Toggle edit project modal'
const SET_EDIT_MODAL_PROJECT = 'Set edit project modal project'
const SET_EDIT_MODAL_CREATING = 'Set edit project modal creating mode'
const UPDATING_PROJECT = 'Set updating project status'

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
      credentials: 'include',
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
  return async dispatch => {
    dispatch(updatingProject(true))

    project = formatProject(project)

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${project._id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...project, _id: undefined }),
    })

    dispatch(updatingProject(false))
    dispatch(toggleEditModal(false))
    dispatch(fetchProjects())
  }
}

export const createProject = project => {
  return async dispatch => {
    dispatch(updatingProject(true))

    project = formatProject(project)

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...project, _id: undefined }),
    })

    dispatch(updatingProject(false))
    dispatch(toggleEditModal(false))
    dispatch(fetchProjects())
  }
}

export const toggleEditModal = isVisible => ({
  type: TOGGLE_EDIT_MODAL,
  payload: isVisible,
})

export const setEditModalProject = project => ({
  type: SET_EDIT_MODAL_PROJECT,
  payload: project,
})

export const setEditModalCreating = isCreating => ({
  type: SET_EDIT_MODAL_CREATING,
  payload: isCreating,
})

const updatingProject = isUpdating => ({
  type: UPDATING_PROJECT,
  payload: isUpdating,
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
      case UPDATING_PROJECT:
        draft.editModal.updating = payload
        break
      case SET_EDIT_MODAL_CREATING:
        draft.editModal.creating = payload
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
      creating: false,
      visible: false,
      updating: false,
      project: {},
    },
  }
)

const formatProject = project => {
  project = { ...project }
  const { technologies, codeLink, demoLink } = project

  project.technologies =
    technologies && technologies.split(',').map(tech => tech.trim())

  project.codeLink = codeLink && appendHttps(codeLink)
  project.demoLink = demoLink && appendHttps(demoLink)

  return project
}

const appendHttps = url => {
  if (url.indexOf('https://') !== -1) return url
  else if (url.indexOf('http://') !== -1)
    return url.replace('http://', 'https://')
  else return `https://${url}`
}

export default projects

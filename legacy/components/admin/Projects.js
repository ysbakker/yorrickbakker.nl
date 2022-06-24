import React, { useEffect } from 'react'
import styles from '../../css/Projects.module.sass'
import {
  fetchProjects,
  toggleDeleteModal,
  setDeleteModalProject,
  setEditModalProject,
  toggleEditModal,
  setEditModalCreating,
} from '../../redux/projects'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Card, Button } from 'antd'
import { FaGithub, FaDesktop, FaPlus } from 'react-icons/fa'
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const Projects = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.projects, shallowEqual)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  const editProject = project => {
    dispatch(setEditModalCreating(false))
    dispatch(setEditModalProject(project))
    dispatch(toggleEditModal(true))
  }

  const createProject = () => {
    dispatch(setEditModalCreating(true))
    dispatch(setEditModalProject(null))
    dispatch(toggleEditModal(true))
  }

  const deleteProject = project => {
    dispatch(setDeleteModalProject(project))
    dispatch(toggleDeleteModal(true))
  }

  return (
    <div className={styles['projects-editor']}>
      <div>
        <h1>Projecten</h1>
        <Button
          type="primary"
          shape="circle"
          icon={<FaPlus />}
          size="large"
          onClick={createProject}
        />
      </div>
      {data.map(project => {
        const { _id, heading, text, technologies, codeLink, demoLink } = project
        return (
          <Card
            key={_id}
            title={heading}
            actions={[
              <AiOutlineEdit
                className="anticon"
                key="edit"
                onClick={() => editProject(project)}
              />,
              <AiFillDelete
                className="anticon"
                key="delete"
                onClick={() => deleteProject(project)}
              />,
            ]}
          >
            <p>{text}</p>
            <p className={styles['project-link']}>
              <FaGithub />
              &nbsp;
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                {codeLink}
              </a>
            </p>
            <p className={styles['project-link']}>
              <FaDesktop />
              &nbsp;
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                {demoLink}
              </a>
            </p>
            {technologies.map(tech => (
              <span key={tech} className={styles['tech-highlight']}>
                {tech}
              </span>
            ))}
          </Card>
        )
      })}
      <DeleteModal />
      <EditModal />
    </div>
  )
}

export default Projects

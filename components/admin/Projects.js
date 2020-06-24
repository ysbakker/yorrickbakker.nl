import React, { useEffect } from 'react'
import styles from '../../css/Projects.module.sass'
import {
  fetchProjects,
  toggleDeleteModal,
  setDeleteModalProject,
  setEditModalProject,
  toggleEditModal,
} from '../../redux/projects'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Card } from 'antd'
import { FaGithub, FaDesktop } from 'react-icons/fa'
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
    dispatch(setEditModalProject(project))
    dispatch(toggleEditModal(true))
  }

  const deleteProject = project => {
    dispatch(setDeleteModalProject(project))
    dispatch(toggleDeleteModal(true))
  }

  return (
    <div className={styles['projects-editor']}>
      <h1>Projecten</h1>
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

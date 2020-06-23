import React, { useEffect } from 'react'
import styles from '../../css/Projects.module.sass'
import { fetchProjects } from '../../redux/projects'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Card } from 'antd'
import { FaGithub, FaDesktop } from 'react-icons/fa'
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai'

const Projects = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.projects, shallowEqual)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  const editProject = id => {}

  const deleteProject = id => {}

  return (
    <div className={styles['projects-editor']}>
      <h1>Projecten</h1>
      {data.map(({ _id, heading, text, technologies, codeLink, demoLink }) => (
        <Card
          key={_id}
          title={heading}
          actions={[
            <AiOutlineEdit
              className="anticon"
              key="edit"
              onClick={() => editProject(_id)}
            />,
            <AiFillDelete
              className="anticon"
              key="delete"
              onClick={() => deleteProject(_id)}
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
      ))}
    </div>
  )
}

export default Projects

import React, { useEffect } from 'react'
import styles from '../../css/Projects.module.sass'
import { fetchProjects } from '../../redux/projects'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Card } from 'antd'

const Projects = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.projects, shallowEqual)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  return (
    <div className={styles['projects-editor']}>
      {data.map(({ heading, text, technologies, codeLink, demoLink }) => (
        <Card key={heading} title={heading}>
          {text}
        </Card>
      ))}
    </div>
  )
}

export default Projects

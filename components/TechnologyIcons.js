import React from 'react'
import styles from '../css/TechnologyIcons.module.sass'
import { FaDocker, FaReact, FaNodeJs } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { Tooltip } from 'antd'

const TechnologyIcons = ({ technologies }) => {
  return (
    <div className={styles['technology-wrapper']}>
      {technologies.map(tech => (
        <Tooltip title={tech}>{iconParser(tech.toLowerCase())}</Tooltip>
      ))}
    </div>
  )
}

const iconParser = name => {
  switch (name) {
    case 'docker':
      return <FaDocker className={styles[name]} />
    case 'react':
      return <FaReact className={styles[name]} />
    case 'nodejs':
      return <FaNodeJs className={styles[name]} />
    case 'mongodb':
      return <DiMongodb className={styles[name]} />
  }
}

export default TechnologyIcons

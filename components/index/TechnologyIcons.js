import React from 'react'
import styles from '../../css/TechnologyIcons.module.sass'
import { FaDocker, FaReact, FaNodeJs, FaQuestionCircle, FaVuejs, FaAws, FaGoogle } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { Tooltip } from 'antd'

const TechnologyIcons = ({ technologies }) => {
  return (
    <div className={styles['technology-wrapper']}>
      {technologies.map(tech => (
        <Tooltip
          key={tech}
          mouseEnterDelay={0}
          mouseLeaveDelay={0}
          title={tech}
        >
          {iconParser(tech.toLowerCase())}
        </Tooltip>
      ))}
    </div>
  )
}

const iconParser = name => {
  switch (name) {
    case 'docker':
      return <FaDocker className={styles[name]} />
    case 'react':
    case 'next.js':
      return <FaReact className={styles.react} />
    case 'nodejs':
      return <FaNodeJs className={styles[name]} />
    case 'mongodb':
      return <DiMongodb className={styles[name]} />
    case 'vue.js':
    case 'vuejs':
    case 'vue':
      return <FaVuejs className={styles.vue} />
    case 'golang':
    case 'go':
      return <AiFillGoogleCircle className={styles.go} />
    case 'aws':
      return <FaAws className={styles[name]} />
    default:
      return <FaQuestionCircle />
  }
}

export default TechnologyIcons

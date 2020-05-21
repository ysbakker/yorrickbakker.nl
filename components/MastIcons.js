import React from 'react'
import styles from '../css/MastIcons.module.sass'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const MastIcons = () => {
  return (
    <div className={styles['icon-container']}>
      <FaGithub />
      <FaLinkedin />
    </div>
  )
}

export default MastIcons

import React from 'react'
import styles from '../css/MastIcons.module.sass'
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'

const MastIcons = () => {
  return (
    <div className={styles['icon-container']}>
      <a
        href="https://www.github.com/ysbakker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/yorrick-bakker-203938173/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  )
}

export default MastIcons

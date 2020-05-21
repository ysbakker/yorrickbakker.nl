import React from 'react'
import styles from '../css/Slanted.module.sass'

const Slanted = ({ children }) => {
  return <div className={styles['slant-container']}>{children}</div>
}

export default Slanted

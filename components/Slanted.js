import React from 'react'
import styles from '../css/Slanted.module.sass'

const Slanted = ({ children, className }) => {
  className =
    className &&
    className
      .split(' ')
      .reduce((acc, value) => (acc += ` ${styles[value] || value}`), '')

  return (
    <div className={`${styles['slant-container']} ${className}`}>
      {children}
    </div>
  )
}

export default Slanted

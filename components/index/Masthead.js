import React from 'react'
import styles from '../../css/Masthead.module.sass'
import ProfilePicture from './ProfilePicture'
import MastIcons from './MastIcons'

const Masthead = () => {
  return (
    <div className={styles['mast-container']}>
      <div>
        <ProfilePicture />
      </div>
      <div>
        <div>
          <h1>Yorrick Bakker</h1>
          <h2>Web Developer</h2>
        </div>
        <div>
          <MastIcons />
        </div>
      </div>
    </div>
  )
}

export default Masthead

import React from 'react'
import styles from '../../css/ProfilePicture.module.sass'

const ProfilePicture = () => {
  return (
    <figure className={styles['picture-container']}>
      <img src="/yorrick.jpg" alt="Profielfoto Yorrick Bakker" />
    </figure>
  )
}

export default ProfilePicture

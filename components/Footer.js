import React from 'react'
import styles from '../css/Footer.module.sass'
import Slanted from './Slanted'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <Slanted className="bottom stick-to-top">
      <div className={`${styles['footer']} darkblue`}>
        <p>
          <FaCopyright />
          &nbsp;
          {new Date().getFullYear()}
          &nbsp;Yorrick Bakker
        </p>
      </div>
    </Slanted>
  )
}

export default Footer

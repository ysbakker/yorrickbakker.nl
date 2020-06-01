import React from 'react'
import '../css/Contact.module.sass'
import Slanted from './Slanted'

const Contact = () => {
  return (
    <>
      <Slanted>
        <div className="heading darkblue">
          <h1>Contact</h1>
        </div>
      </Slanted>
      <Slanted>
        <div className="paragraph blue no-margin">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptates ullam architecto praesentium error distinctio sed
            assumenda nostrum beatae optio modi deserunt dolorem illum eligendi
            placeat corrupti accusamus, ut repudiandae.
          </p>
        </div>
      </Slanted>
    </>
  )
}

export default Contact

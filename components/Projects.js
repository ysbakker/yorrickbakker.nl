import React from 'react'
import '../css/Projects.module.sass'
import Slanted from './Slanted'

const Projects = () => {
  return (
    <>
      <Slanted>
        <div className="heading darkblue">
          <h1>Projecten</h1>
        </div>
      </Slanted>
      <Project
        heading="Quizzer"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet
          nostrum consequatur soluta laudantium! Officia, atque. Culpa quis
          nulla consequuntur."
      />
    </>
  )
}

export default Projects

const Project = props => {
  return (
    <>
      <Slanted>
        <div className="heading darkgreyblue">
          <h2>{props.heading}</h2>
        </div>
      </Slanted>
      <Slanted>
        <div className="paragraph greyblue no-margin align-left">
          <p>{props.text}</p>
        </div>
      </Slanted>
    </>
  )
}

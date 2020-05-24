import React from 'react'
import '../css/Projects.module.sass'
import Slanted from './Slanted'

const Projects = () => {
  return (
    <>
      <Slanted>
        <div className="heading purple">
          <h1>Projecten</h1>
        </div>
      </Slanted>
      <Project>
        <h2>Quizzer</h2>
      </Project>
    </>
  )
}

export default Projects

const Project = () => {
  return null
}

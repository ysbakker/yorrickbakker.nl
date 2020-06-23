import React from 'react'
import styles from '../../css/Projects.module.sass'
import Slanted from './Slanted'
import TechnologyIcons from './TechnologyIcons'
import { Button, Alert } from 'antd'
import { FaGithub, FaDesktop } from 'react-icons/fa'
import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchProjects } from '../../redux/projects'

const Projects = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  const { fetching, success, data } = useSelector(
    state => state.projects,
    shallowEqual
  )

  return (
    <>
      <Slanted>
        <div className={`darkblue${fetching ? ' fetching' : ''}`}>
          <h1>Projecten</h1>
        </div>
      </Slanted>
      {fetching || !success || (
        <Slanted className="stick-to-top no-margin-sm">
          <div className={styles['projects-wrapper']}>
            <div className={styles['projects-flex-wrapper']}>
              {data.map(
                ({ heading, text, technologies, codeLink, demoLink }) => (
                  <Project
                    key={heading}
                    heading={heading}
                    text={text}
                    technologies={technologies}
                    codeLink={codeLink}
                    demoLink={demoLink}
                  />
                )
              )}
            </div>
          </div>
        </Slanted>
      )}
      {!fetching && success === false && (
        <Alert
          className="fix-to-top force-foreground w-100"
          type="error"
          message="API is not responding!"
          banner
          closable
        />
      )}
    </>
  )
}

const Project = props => {
  return (
    <div className={styles['project']}>
      <Slanted>
        <div className="darkgreyblue">
          <h2>{props.heading}</h2>
        </div>
      </Slanted>
      <Slanted className="stick-to-top">
        <div className="greyblue no-margin">
          <div>
            <p className="align-left">{props.text}</p>
            <div>
              <div className={styles['technologies']}>
                <TechnologyIcons technologies={props.technologies} />
              </div>
              <div className={styles['button-links']}>
                <Button
                  href={props.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  type="primary"
                >
                  <FaGithub />
                  Code
                </Button>
                {props.demoLink && (
                  <Button
                    href={props.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    type="primary"
                  >
                    <FaDesktop />
                    Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Slanted>
    </div>
  )
}

export default Projects

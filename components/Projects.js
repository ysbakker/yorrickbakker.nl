import React from 'react'
import styles from '../css/Projects.module.sass'
import Slanted from './Slanted'
import TechnologyIcons from './TechnologyIcons'
import { Button } from 'antd'
import { FaGithub, FaDesktop } from 'react-icons/fa'

const Projects = () => {
  return (
    <>
      <Slanted>
        <div className="darkblue">
          <h1>Projecten</h1>
        </div>
      </Slanted>
      <Slanted className="stick-to-top no-margin-sm">
        <div className={styles['projects-wrapper']}>
          <div className={styles['projects-flex-wrapper']}>
            <Project
              heading="Quizzer"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet
                nostrum consequatur soluta laudantium! Officia, atque. Culpa quis
                nulla consequuntur."
              technologies={['Docker', 'React', 'Nodejs', 'MongoDB']}
              codeLink="https://github.com/ysbakker/Quizzer-WS"
              demoLink="https://quizzer.yorrickbakker.nl"
            />
            <Project
              heading="Quizzer"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet
                nostrum consequatur soluta laudantium! Officia, atque. Culpa quis
                nulla consequuntur."
              technologies={['Docker', 'React', 'Nodejs', 'MongoDB']}
              codeLink="https://github.com/ysbakker/Quizzer-WS"
              demoLink="https://quizzer.yorrickbakker.nl"
            />
          </div>
        </div>
      </Slanted>
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
      </Slanted>
    </div>
  )
}

export default Projects

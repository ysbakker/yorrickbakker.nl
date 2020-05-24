import React from 'react'
import { Row, Col } from 'antd'
import Slanted from '../components/Slanted'
import Masthead from '../components/Masthead'
import IntroText from '../components/IntroText'
import Projects from './Projects.js'

const Layout = () => {
  return (
    <div className="layout-container">
      <Row>
        <Col span={24}>
          <Masthead />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slanted>
            <IntroText />
          </Slanted>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Projects />
        </Col>
      </Row>
    </div>
  )
}

export default Layout

import React from 'react'
import { Row, Col } from 'antd'
import Slanted from './Slanted'
import Masthead from './Masthead'
import IntroText from './IntroText'
import Projects from './Projects'
import Contact from './Contact'

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
      <Row>
        <Col span={24}>
          <Contact />
        </Col>
      </Row>
    </div>
  )
}

export default Layout

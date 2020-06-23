import React from 'react'
import { Row, Col } from 'antd'
import Masthead from './Masthead'
import IntroText from './IntroText'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

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
          <IntroText />
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
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </div>
  )
}

export default Layout

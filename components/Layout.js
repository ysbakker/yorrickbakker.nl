import React from 'react'
import { Row, Col } from 'antd'
import Slanted from '../components/Slanted'
import Masthead from '../components/Masthead'
import IntroText from '../components/IntroText'

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
          <Slanted>
            <div className="heading darkblue lift-up">
              <h1>Hello</h1>
            </div>
          </Slanted>
        </Col>
      </Row>
    </div>
  )
}

export default Layout

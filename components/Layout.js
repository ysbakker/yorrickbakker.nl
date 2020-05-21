import React from 'react'
import { Row, Col } from 'antd'
import Slanted from '../components/Slanted'
import Masthead from '../components/Masthead'

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
            <div className="title-header darkblue">
              <p>Hello</p>
            </div>
          </Slanted>
        </Col>
      </Row>
    </div>
  )
}

export default Layout

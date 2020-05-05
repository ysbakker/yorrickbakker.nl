import React from 'react';
import { Row, Col } from 'antd';
import Slanted from '../components/Slanted';

const Layout = () => {
  return (
    <div className="layout-container">
      <Row>
        <Col span={24}>
          <Slanted>
            <div
              style={{
                backgroundColor: 'purple',
                textAlign: 'center',
                color: '#fff',
                fontSize: '30px',
                fontWeight: 'bold',
                padding: '1em 0 0 0',
              }}
            >
              <p>Hello</p>
            </div>
          </Slanted>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;

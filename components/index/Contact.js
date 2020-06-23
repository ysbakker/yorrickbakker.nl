import React from 'react'
import styles from '../../css/Contact.module.sass'
import Slanted from './Slanted'
import { Form, Input } from 'antd'

const Contact = () => {
  return (
    <>
      <Slanted>
        <div className="darkblue">
          <h1>Contact</h1>
        </div>
      </Slanted>
      <Slanted className="stick-to-top">
        <div className="form blue no-margin">
          <Form
            name="contact"
            className={styles['contact-form']}
            size="large"
            labelCol={{ span: 3 }}
          >
            <Form.Item
              label="Naam"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Vul hier uw naam in',
                },
              ]}
            >
              <Input placeholder="Harry" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Vul hier uw emailadres in',
                },
              ]}
            >
              <Input placeholder="harry@gmail.com" type="email" />
            </Form.Item>
          </Form>
        </div>
      </Slanted>
    </>
  )
}

export default Contact

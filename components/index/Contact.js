import React from 'react'
import styles from '../../css/Contact.module.sass'
import Slanted from './Slanted'
import { Form, Input, Button } from 'antd'
import { sendMessage } from '../../redux/messages'
import { useDispatch } from 'react-redux'

const Contact = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const handleSubmit = message => {
    dispatch(sendMessage(message))
  }

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
            form={form}
            name="contact"
            className={styles['contact-form']}
            size="large"
            labelCol={{ span: 3 }}
            onFinish={handleSubmit}
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
            <Form.Item
              label="Bericht"
              name="message"
              rules={[
                {
                  required: true,
                  message: 'Vul hier uw bericht in',
                },
              ]}
            >
              <Input.TextArea
                className="ant-input-lg"
                placeholder="Uw bericht..."
                rows="2"
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, sm: { offset: 3 } }}>
              <Button type="primary" htmlType="submit">
                Verstuur
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Slanted>
    </>
  )
}

export default Contact

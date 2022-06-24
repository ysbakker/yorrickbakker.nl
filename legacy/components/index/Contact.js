import React from 'react'
import styles from '../../css/Contact.module.sass'
import Slanted from './Slanted'
import { Form, Input, Button, Alert } from 'antd'
import { sendMessage } from '../../redux/messages'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useEffect } from 'react'

const Contact = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const { fetching, success } = useSelector(
    state => state.messages,
    shallowEqual
  )

  useEffect(() => {
    if (success === true) form.resetFields()
  }, [success])

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
              <Button type="primary" htmlType="submit" loading={fetching}>
                Verstuur
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Slanted>
      {success === true ? (
        <Alert
          className="fix-to-top force-foreground w-100"
          type="success"
          message="Bericht verstuurd!"
          banner
          closable
        />
      ) : (
        success === false && (
          <Alert
            className="fix-to-top force-foreground w-100"
            type="error"
            message="Er ging iets mis met het verwerken van uw bericht"
            banner
            closable
          />
        )
      )}
    </>
  )
}

export default Contact

import React from 'react'
import { Modal, Form, Input } from 'antd'
import { login } from '../../redux/user'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const { fetching } = useSelector(state => state.user)

  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login(form.getFieldsValue()))
  }

  return (
    <Modal
      title="Log in"
      closable={false}
      visible
      okText="Log in"
      onOk={handleLogin}
      confirmLoading={fetching}
    >
      <Form form={form} name="login" size="large" layout="vertical">
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Voer hier uw gebruikersnaam in' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Voer hier uw wachtwoord in' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Login

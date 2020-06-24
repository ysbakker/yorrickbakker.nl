import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { updateProject, toggleEditModal } from '../../redux/projects'
import TextArea from 'antd/lib/input/TextArea'
import { useForm } from 'antd/lib/form/util'

const EditModal = () => {
  const dispatch = useDispatch()
  const { editModal: { visible, updating, project } = {} } = useSelector(
    state => state.projects,
    shallowEqual
  )

  const [form] = useForm()

  useEffect(() => {
    form.resetFields()
  }, [project])

  const handleOk = () => {
    dispatch(updateProject(project))
  }
  const handleCancel = () => {
    dispatch(toggleEditModal(false))
  }
  return (
    project && (
      <Modal
        title={`Updating ${project.heading || 'project'}`}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={updating}
      >
        <Form
          form={form}
          name="projectEditor"
          size="medium"
          layout="vertical"
          initialValues={{
            ...project,
            codeLink:
              project.codeLink &&
              project.codeLink.replace('https://', '').replace('http://', ''),
            demoLink:
              project.demoLink &&
              project.demoLink.replace('https://', '').replace('http://', ''),
          }}
        >
          <Form.Item
            label="Titel"
            name="heading"
            rules={[
              {
                required: true,
                message: 'Vul een projectnaam in',
              },
            ]}
          >
            <Input placeholder="Projectnaam" />
          </Form.Item>
          <Form.Item
            label="Beschrijving"
            name="text"
            rules={[
              {
                required: true,
                message: 'Vul hier de projectbeschrijving in',
              },
            ]}
          >
            <TextArea rows="4" placeholder="Een mooi project" />
          </Form.Item>
          <Form.Item label="Code-link" name="codeLink">
            <Input addonBefore="https://" placeholder="github.com/code" />
          </Form.Item>
          <Form.Item label="Demo-link" name="demoLink">
            <Input addonBefore="https://" placeholder="domain.com/demo" />
          </Form.Item>
        </Form>
      </Modal>
    )
  )
}

export default EditModal

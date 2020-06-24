import React from 'react'
import { Modal } from 'antd'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { updateProject, toggleEditModal } from '../../redux/projects'

const EditModal = () => {
  const dispatch = useDispatch()
  const { editModal: { visible, updating, project } = {} } = useSelector(
    state => state.projects,
    shallowEqual
  )

  const handleOk = () => {
    dispatch(updateProject(project))
  }
  const handleCancel = () => {
    dispatch(toggleEditModal(false))
  }
  return (
    <Modal
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={updating}
      okButtonProps={{ danger: true }}
    >
      <p>Edit {(project && project.heading) || 'project'}?</p>
    </Modal>
  )
}

export default EditModal

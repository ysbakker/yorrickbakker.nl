import React from 'react'
import { Modal } from 'antd'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { deleteProject, toggleDeleteModal } from '../../redux/projects'

const DeleteModal = () => {
  const dispatch = useDispatch()
  const { deleteModal: { visible, deleting, project } = {} } = useSelector(
    state => state.projects,
    shallowEqual
  )

  const handleOk = () => {
    dispatch(deleteProject(project))
  }
  const handleCancel = () => {
    dispatch(toggleDeleteModal(false))
  }
  return (
    <Modal
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={deleting}
      okButtonProps={{ danger: true }}
    >
      <p>Delete {(project && project.heading) || 'project'}?</p>
    </Modal>
  )
}

export default DeleteModal

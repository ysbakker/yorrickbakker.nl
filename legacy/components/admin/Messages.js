import React, { useState } from 'react'
import styles from '../../css/Messages.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchMessages, deleteMessage } from '../../redux/messages'
import { Collapse, Empty, Modal } from 'antd'
import { FaReply, FaTrash } from 'react-icons/fa'

const Messages = () => {
  // Enable / disable the confirmation modal when deleting a message
  const UNSAFE_DELETE = true

  const dispatch = useDispatch()
  const { data, deleting } = useSelector(state => state.messages)

  const [selectedMessage, setSelectedMessage] = useState(null)

  useEffect(() => {
    dispatch(fetchMessages())
  }, [])

  return (
    <div className={styles['messages']}>
      <h1>Berichten</h1>
      <div>
        {data.length > 0 ? (
          <Collapse>
            {data.map(message => (
              <Collapse.Panel
                key={message._id}
                header={`${message.name} | ${message.email}`}
                extra={
                  <MessageButtons
                    handleReply={event => {
                      event.stopPropagation()
                      location.href = generateMailto(message)
                    }}
                    handleDelete={event => {
                      event.stopPropagation()
                      if (UNSAFE_DELETE) dispatch(deleteMessage(message._id))
                      else setSelectedMessage(message._id)
                    }}
                  />
                }
              >
                <div>{message.message}</div>
              </Collapse.Panel>
            ))}
          </Collapse>
        ) : (
          <Empty description="Geen berichten :(" />
        )}
      </div>
      {!UNSAFE_DELETE && (
        <Modal
          confirmLoading={deleting}
          visible={selectedMessage || deleting}
          onOk={async () => {
            dispatch(deleteMessage(selectedMessage))
            setSelectedMessage(null)
          }}
          onCancel={() => {
            setSelectedMessage(null)
          }}
        >
          <p>Verwijder bericht?</p>
        </Modal>
      )}
    </div>
  )
}

const generateMailto = msg => {
  const { name, email, message } = msg
  const subject = message
    .split(' ')
    .reduce((acc, cur, i) => (i > 6 ? acc : `${acc}${cur} `), '')
  return `mailto:${email}?subject=RE: "${subject}..."&body=Beste ${name},%0A%0AVia mijn website heeft u dit bericht gestuurd:%0A${message}`
}

const MessageButtons = ({ handleReply, handleDelete }) => {
  return (
    <div className={styles['message-buttons']}>
      <FaReply onClick={handleReply} />
      <FaTrash onClick={handleDelete} />
    </div>
  )
}

export default Messages

import React from 'react'
import styles from '../../css/Messages.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchMessages } from '../../redux/messages'
import { Collapse, Empty } from 'antd'
import { FaReply, FaTrash } from 'react-icons/fa'

const Messages = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.messages)

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

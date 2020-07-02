import React from 'react'
import styles from '../../css/Messages.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchMessages } from '../../redux/messages'
import { Collapse, Empty } from 'antd'

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

export default Messages

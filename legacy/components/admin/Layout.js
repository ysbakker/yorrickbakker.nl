import React from 'react'
import Projects from './Projects'
import Messages from './Messages'

const Layout = () => {
  return (
    <div className="admin-container">
      <Messages />
      <Projects />
    </div>
  )
}

export default Layout

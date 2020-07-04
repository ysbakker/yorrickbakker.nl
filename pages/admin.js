import React, { useEffect } from 'react'
import Layout from '../components/admin/Layout'
import Metadata from '../components/index/Metadata'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from '../redux/user'
import Login from '../components/admin/Login'

const admin = () => {
  const { authorized, fetching } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSession())
  }, [])
  return (
    <>
      <Metadata title="Yorrick Bakker | Portfolio Admin" />
      {authorized && !fetching ? <Layout /> : <Login />}
    </>
  )
}

export default admin

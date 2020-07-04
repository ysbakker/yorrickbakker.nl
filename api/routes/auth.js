const auth = require('express').Router()
const usersModel = require('../models/users')
const { verifySession } = require('../middleware/authentication')

auth.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    const e = new Error('No username or password specified')
    e.rescode = 400
    return next(e)
  }

  try {
    const { token, expires } = await usersModel.login(username, password)

    res.cookie('session-token', token, {
      expires: new Date(expires),
      httpOnly: true,
      secure: true,
    })

    return res.status(200).send()
  } catch (e) {
    return next(e)
  }
})

auth.post('/register', async (req, res, next) => {
  // Opening this endpoint allows anyone to register and modify projects/messages
  return res.status(403).send()
  const { username, password } = req.body

  if (!username || !password) {
    const e = new Error('No username or password specified')
    e.rescode = 400
    return next(e)
  }

  try {
    await usersModel.register(username, password)
    return res.status(201).send()
  } catch (e) {
    next(e)
  }
})

auth.get('/users', verifySession, async (req, res) => {
  const users = await usersModel.find().lean()
  return res.send(users)
})

module.exports = auth

const auth = require('express').Router()
const usersModel = require('../models/users')
const { sessionIsValid } = require('../middleware/authentication')

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
      path: '/admin',
      secure: true,
    })

    return res.status(200).send()
  } catch (e) {
    return next(e)
  }
})

auth.post('/register', async (req, res, next) => {
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

auth.get('/users', sessionIsValid, async (req, res) => {
  const users = await usersModel.find()
  return res.send(users)
})

module.exports = auth

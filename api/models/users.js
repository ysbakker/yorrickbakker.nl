const mongoose = require('mongoose')
const sessionsModel = require('./sessions')
const bcrypt = require('bcryptjs')

const users = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

users.static('register', async function (username, password) {
  const hash = await bcrypt.hash(password, 10)
  try {
    await this.create({ username, password: hash })
  } catch (e) {
    if (e.code === 11000) {
      e.message = 'User already exists!'
      e.rescode = 400
    }
    throw e
  }
})

users.static('login', async function (username, password) {
  const user = await this.findOne({ username })

  const matching = user && (await bcrypt.compare(password, user.password))

  if (!matching) {
    const e = new Error('Incorrect username or password')
    e.rescode = 401
    throw e
  }

  return await sessionsModel.generate(user)
})

module.exports = mongoose.model('Users', users)

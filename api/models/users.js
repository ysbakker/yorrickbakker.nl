const mongoose = require('mongoose')
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
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  await this.create({ username, password: hash })
})

users.static('login', async function (username, password) {
  const user = await this.findOne({ username })

  const matching = user && (await bcrypt.compare(password, user.password))

  if (!matching) {
    const e = new Error('Incorrect username or password')
    e.rescode = 401
    throw e
  }
})

module.exports = mongoose.model('Users', users)

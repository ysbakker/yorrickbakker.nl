const mongoose = require('mongoose')
const crypto = require('crypto')

const sessions = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
  created: {
    type: Date,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
})

sessions.static('generate', async function (user) {
  const token = createToken()

  const created = new Date()
  const expires = new Date().setMonth(created.getMonth() + 1)

  await this.create({
    token,
    user: user._id,
    created,
    expires,
  })

  return { token, expires }
})

sessions.static('verifyToken', async function (token) {
  const result = await this.findOne({ token }).populate('user')

  if (!result || result.expires.getTime() < new Date().getTime())
    throw new Error()

  return result
})

const createToken = () => {
  return crypto.randomBytes(16).toString('base64')
}

module.exports = mongoose.model('Sessions', sessions)

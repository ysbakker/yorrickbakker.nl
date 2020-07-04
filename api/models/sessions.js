const mongoose = require('mongoose')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const sessions = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  generatedDate: {
    type: Date,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
})

sessions.static('generate', async function (user) {
  const token = createToken()
  const hashedToken = await bcrypt.hash(createToken(), 10)

  const generatedDate = new Date()
  const expiryDate = new Date().setMonth(generatedDate.getMonth() + 1)

  await this.create({
    token: hashedToken,
    user: user._id,
    generatedDate,
    expiryDate,
  })

  return { token, expiryDate }
})

const createToken = () => {
  return crypto.randomBytes(16).toString('base64')
}

module.exports = mongoose.model('Sessions', sessions)

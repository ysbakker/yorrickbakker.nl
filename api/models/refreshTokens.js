const mongoose = require('mongoose')
const crypto = require('crypto')

const refreshTokens = new mongoose.Schema({
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

refreshTokens.static('generate', async function (user) {
  const token = createToken()

  const generatedDate = new Date()
  const expiryDate = new Date().setMonth(generatedDate.getMonth() + 1)

  return await this.create({
    token,
    user: user._id,
    generatedDate,
    expiryDate,
  })
})

const createToken = () => {
  return crypto.randomBytes(16).toString('base64')
}

module.exports = mongoose.model('RefreshTokens', refreshTokens)

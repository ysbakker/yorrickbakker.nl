const mongoose = require('mongoose')

const refreshTokens = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
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

module.exports = mongoose.model('RefreshTokens', refreshTokens)

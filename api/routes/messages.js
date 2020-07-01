const messages = require('express').Router()
const messagesModel = require('../models/messages')

messages.get('/', async (req, res) => {
  res.send('Get messages')
})

module.exports = messages

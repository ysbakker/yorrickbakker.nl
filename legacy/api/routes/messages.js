const messages = require('express').Router()
const messagesModel = require('../models/messages')
const { verifySession } = require('../middleware/authentication')
const notify = require('../services/telegram')

messages.get('/', verifySession, async (req, res) => {
  const messages = await messagesModel.find().lean()
  res.send(messages)
})

messages.post('/', async (req, res) => {
  const message = req.body
  try {
    notify(`Nieuw bericht!\n\n${message.message}`)
    await messagesModel.create(message)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
  return res.status(201).send()
})

messages.delete('/:message', verifySession, async (req, res) => {
  const { message } = req.params

  if (!message) return res.status(400).send({ message: 'Missing message id' })

  try {
    await messagesModel.findByIdAndDelete(message)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
  return res.status(204).send()
})

module.exports = messages

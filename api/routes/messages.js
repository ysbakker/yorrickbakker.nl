const messages = require('express').Router()
const messagesModel = require('../models/messages')

messages.get('/', async (req, res) => {
  const messages = await messagesModel.find()
  res.send(messages)
})

messages.post('/', async (req, res) => {
  const message = req.body
  try {
    await messagesModel.create(message)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
  return res.status(201).send()
})

messages.delete('/:message', async (req, res) => {
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

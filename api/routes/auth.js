const auth = require('express').Router()

auth.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password)
    return res.status(400).send({ error: 'No username or password specified' })
})

module.exports = auth

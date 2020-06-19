require('dotenv').config()

const app = require('express')()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send({ message: 'hello there!' })
})

app.listen(port)

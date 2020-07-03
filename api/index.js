require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose
  .connect(`${process.env.MONGO_URL}/YorrickBakker`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(e => {
    console.log(process.env.MONGO_URL)
    console.log(e)
  })

app.use(
  cors({
    origin: process.env.ORIGINS.split(','),
  })
)

app.use(express.json())

app.use('/auth', require('./routes/auth'))
app.use('/projects', require('./routes/projects'))
app.use('/messages', require('./routes/messages'))

app.listen(process.env.PORT)

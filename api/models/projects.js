const mongoose = require('mongoose')

const projects = new mongoose.Schema({
  title: String,
  body: String,
  codeUrl: String,
  demoUrl: String,
})

module.exports = mongoose.model('Projects', projects)

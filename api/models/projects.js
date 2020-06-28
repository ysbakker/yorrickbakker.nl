const mongoose = require('mongoose')

const projects = new mongoose.Schema({
  heading: { type: String, required: true },
  text: { type: String, required: true },
  technologies: { type: [String], required: true },
  codeLink: { type: String, required: true },
  demoLink: { type: String, required: false },
})

module.exports = mongoose.model('Projects', projects)

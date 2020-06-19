const projects = require('express').Router()
const projectsModel = require('../models/projects')

projects.get('/', async (req, res) => {
  const projects = await projectsModel.find()
  res.send(projects)
})

module.exports = projects

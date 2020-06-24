const projects = require('express').Router()
const projectsModel = require('../models/projects')

projects.get('/', async (req, res, next) => {
  try {
    const projects = await projectsModel.find()
    return res.send(projects)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
})

projects.delete('/:project', async (req, res, next) => {
  const { project } = req.params

  if (!project) return res.status(400).send({ message: 'Missing project id' })

  try {
    await projectsModel.findByIdAndDelete(project)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
  return res.status(204).send()
})

module.exports = projects

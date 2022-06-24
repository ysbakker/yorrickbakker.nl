const projects = require('express').Router()
const projectsModel = require('../models/projects')
const { verifySession } = require('../middleware/authentication')

projects.get('/', async (req, res) => {
  try {
    const projects = await projectsModel.find().lean()
    return res.send(projects)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
})

projects.delete('/:project', verifySession, async (req, res) => {
  const { project } = req.params

  if (!project) return res.status(400).send({ message: 'Missing project id' })

  try {
    await projectsModel.findByIdAndDelete(project)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
  return res.status(204).send()
})

projects.put('/:project', verifySession, async (req, res) => {
  const { project: projectId } = req.params

  if (!projectId) return res.status(400).send({ message: 'Missing project id' })

  const project = req.body

  try {
    await projectsModel.updateOne({ _id: projectId }, project, {
      upsert: false,
      runValidators: true,
      setDefaultsOnInsert: true,
    })
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
  return res.status(200).send()
})

projects.post('/', verifySession, async (req, res) => {
  const project = req.body

  try {
    await projectsModel.create(project)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
  return res.status(201).send()
})

module.exports = projects

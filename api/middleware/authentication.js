const sessionsModel = require('../models/sessions')

const verifySession = async (req, res, next) => {
  const { ['session-token']: token } = req.cookies

  if (!token) {
    const e = new Error('No session token specified')
    e.rescode = 401
    return next(e)
  }

  try {
    const result = await sessionsModel.verifyToken(token)
    req.auth = result
  } catch (e) {
    e.message = 'Invalid session'
    e.rescode = 403
    return next(e)
  }

  next()
}

module.exports = { sessionIsValid: verifySession }

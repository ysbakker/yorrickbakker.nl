const sessionsModel = require('../models/sessions')

const verifySession = async (req, res, next) => {
  const { ['session-token']: token } = req.cookies

  if (!token) {
    const e = new Error('No session token specified')
    e.rescode = 401
    return next(e)
  }

  try {
    const tokenData = await sessionsModel.verifyToken(token)
    const expires = await sessionsModel.refreshSession(token)
    req.auth = { ...tokenData, expires }
    res.cookie('session-token', token, {
      expires: expires,
      httpOnly: true,
      secure: true,
    })
  } catch (e) {
    e.message = 'Invalid session'
    e.rescode = 403
    return next(e)
  }

  next()
}

module.exports = { verifySession }

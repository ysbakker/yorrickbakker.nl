const fetch = require('node-fetch')

const notify = message => {
  const url = `https://api.telegram.org/bot${
    process.env.TELEGRAM_BOT_TOKEN
  }/sendMessage?chat_id=${process.env.TELEGRAM_CHANNEL_ID}&text=${encodeURI(
    message
  )}`
  fetch(url)
}

module.exports = notify

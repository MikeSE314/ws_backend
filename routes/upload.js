const router = require('express').Router()
const cors = require('cors')

router.post('/', cors(), async function (req, res, next) {
  res.send('Did the upload thing')
  // res.send(JSON.stringify({ things: 'stuff' }))
})

module.exports = router

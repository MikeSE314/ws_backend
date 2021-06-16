const express = require('express')
const router = express.Router()
const User = require('../models/User')

/* GET home page. */
router.get('/', async function (req, res, next) {
  User.create({ username: 'test' })
  res.send(await User.findAll())
})

module.exports = router

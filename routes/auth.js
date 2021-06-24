'use strict'

const express = require('express')
const router = express.Router()

router.post('/login', (req, res, next) => {
  req.session.user = { name: req.body.name }
  res.send(req.session.user)
})

router.post('/logout', (req, res, next) => {
  req.session.destroy(() => {
    res.send('logged out')
  })
})

module.exports = router

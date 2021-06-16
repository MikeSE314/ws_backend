'use strict'

const WebSocket = require('ws')

// const channelStates = new Map()

const setup = (app) => {
  const wss = new WebSocket.Server({ noServer: true })

  wss.on('connection', function (ws) {
    console.log(ws)
    ws.on('message', function (message) {
      wss.clients.forEach(client => {
        console.log(client)
        if (client.readyState === WebSocket.OPEN) {
          client.send(message)
        }
      })
    })

    // ws.send('something')
  })

  app.on('upgrade', function upgrade (request, socket, head) {
    wss.handleUpgrade(request, socket, head, function done (ws) {
      wss.emit('connection', ws, request)
    })
  })
}

module.exports = setup

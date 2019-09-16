const globals = require('../globals')
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: globals.PORT });
const mp = require('./MessageProcessor')

exports.start = () => {

    wss.on('connection', function connection(ws) {

        ws.send('Welcome!\n  Sincerely, server')

        ws.on('message', function incoming(message) {
            
            mp.process(message)
        })
    })

    console.log('listening.')
}
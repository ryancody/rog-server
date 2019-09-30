const globals = require('../globals')
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: globals.PORT });
const mp = require('./MessageProcessor')
let clients = {}

wss.broadcast = (data) => {
    wss.clients.forEach((client) => {
        client.send(data);
    })
}

exports.broadcast = (message) => {
    wss.clients.forEach((client) => {
        client.send(message);
    })
}

updatePlayerInfo = (id, name, socket) => {
    clients.push({
        id: id,
        name: name,
        socket: socket
    })
}

exports.start = () => {

    wss.on('connection', (ws) => {

        ws.send('Welcome!\n  Sincerely, server')
        wss.broadcast('player joined!')
        this.printConnections()

        ws.on('message', (message) => {

            mp.process(message)
        })
    })

    console.log('listening.')
}

exports.printConnections = () => {
    console.log(wss.clients.size + ' connection(s)')
    wss.clients.forEach((client) => {
        client.send(wss.clients.size + ' client(s) connected!')
    })
}
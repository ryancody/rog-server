const globals = require('../globals')
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: globals.PORT });
const mp = require('./MessageProcessor')
let clients = {}

/* *** CLIENTS SCHEMA
clients[socket] = {
    id: id,
    name: name,
    socket: socket
}
*** */

exports.broadcast = (message) => {
    this.broadcast(message, wss.clients)
}

exports.broadcast = (message, toClients) => {
    
    toClients.foreach((client) => {
        client.send(message)
    })
}

exports.sendToSocket = (socket, message) => {

    //console.log('sending to ' + this.getIdFromSocket(socket))
    socket.send(message)
}

exports.getIdFromSocket = (socket) => {
    return clients[socket].id
}

exports.updateClientInfo = (data) => {
    clients[data.socket] = {
        id: data.id,
        name: data.name,
        socket: data.socket
    }
}

exports.start = () => {

    wss.on('connection', (ws) => {

        ws.send('Welcome!\n -The Server')
        ws.send(JSON.stringify({type:'GET_USER_INFO'}))

        ws.on('message', (message) => {

            mp.process(message, ws)
        })
    })

    console.log('listening.')
}

exports.printConnections = () => {
    console.log(wss.clients.size + ' connection(s)')
    wss.clients.forEach((client) => {
        client.send(wss.clients.size + ' client(s) connected!')
    })

    return clients
}

exports.printUsers = () => {
    console.log()
}
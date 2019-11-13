// dictionary to tie all IDs to sockets
// all ID lookups should come form SocketManager singleton

module.exports.SocketManager = () ({

    connections = {}

    this.add = (socket, id) => {

        connections[socket] = id
        connections[id] = socket
    }

    remove = (key) => {

        let otherKey = connections[key]
        delete connections[key]
        delete connections[otherKey]
    }

    getIdFromSocket = (socket) => {

        return connections[id]
    }

    getSocketfromId = (id) => {

        return connections[socket]
    }
})
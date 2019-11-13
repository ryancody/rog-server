let assert = require('chai').assert
let SocketManager = require('../components/SocketManager')

describe('test SocketManager class', function () {

    let socket = {test:'test'}
    let id = 'sampleId'

    it('can add a socket / id pair ', function () {
        
        SocketManager.add(socket, id)

        assert.equal(SocketManager.connections[id], socket)
        assert.equal(SocketManager.connections[socket], id)
    })

    it('can remove a socket / id pair when given id', function () {

        SocketManager.remove(id)

        assert.isNull(SocketManager.connections[id])
        assert.isNull(SocketManager.connections[socket])
    })

    SocketManager.add(socket, id)

    it('can remove a socket / id pair when given socket', function () {

        SocketManager.remove(socket)

        assert.isNull(SocketManager.connections[id])
        assert.isNull(SocketManager.connections[socket])
    })

    SocketManager.add(socket, id)

    it('can retrieve a socket when given an id', function () {

        assert.equal(SocketManager.getSocketfromId(id), socket)
    })

    it('can retrieve an id when given a socket', function () {

        assert.equal(SocketManager.getIdFromSocket(socket), id)
    })
})
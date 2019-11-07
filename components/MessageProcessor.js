const ee = require('./EventManager').emitter

/* *** MESSAGE SCHEMA ***


*** */

exports.process = (message, fromSocket) => {

    try{
        message = parse(message)
    } catch (e) {
        console.error('received:', e)
        return
    }

    switch (message.type) {

        case 'NEW_GAME':
            ee.emit('NEW_GAME', null, fromSocket)
            break

        case 'PRINT_GAMES':
            ee.emit('PRINT_GAMES', null)
            break

        case 'CLOSE_GAME':
            ee.emit('CLOSE_GAME', null, message.from)
            break

        case 'UPDATE_USER_INFO':
            console.log('user data',message.data)
            message.data.socket = fromSocket
            ee.emit('UPDATE_USER_INFO', null, message.data)
            break

        case 'PRINT_USERS':
            ee.emit('PRINT_USERS', null)
            break

        case 'JOIN_GAME':
            console.log(message.from + ' wants to join game ' + message.data.joinId)
            ee.emit('USER_JOIN_GAME', null, message.from, message.data)
            break

        default:
            console.log('received',message)
            break
    }
}

parse = (message) => {
    
    try{
        return JSON.parse(message)
    } catch (e) {
        throw 'could not parse message: ' + e
    }
}
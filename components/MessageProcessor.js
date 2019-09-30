const ee = require('./EventManager').emitter

exports.process = (message) => {

    try{
        message = parse(message)
    } catch (e) {
        console.error('received:', e)
        return
    }

    switch (message.type) {

        case 'NEW_GAME':
            ee.emit('NEW_GAME', null, message.from)
            break

        case 'PRINT_GAMES':
            ee.emit('PRINT_GAMES', null)
            break

        case 'CLOSE_GAME':
            ee.emit('CLOSE_GAME', null, message.from)
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
const GameMaster = require('./GameMaster')
const gm = new GameMaster()

exports.process = (message) => {

    try{
        message = parse(message)
    } catch (e) {
        console.log('received:', message)
        console.error(e)
        return
    }

    switch (message.type) {

        case 'NEW_GAME':

            try {
                console.log('NEW_GAME')
                gm.newGame('tester')
            } catch (e) {
                console.log(e)
            }
            break

        case 'PRINT_GAMES':
            console.log('printing games', gm.printGames())
            break

        case 'CLOSE_GAME':
            console.log('closing game')
            gm.closeGame(message.data)
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
        throw e
    }
}
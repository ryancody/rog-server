const conn = require('./components/Connection')
const ee = require('./components/EventManager').emitter
const GameMaster = require('./components/GameMaster')
const gm = new GameMaster()
const {reducer} = require('./components/StateManager')

console.log('starting...')

// open websocket
conn.start()

//  *** EVENT LISTENERS *** //

ee.on('NEW_GAME', (err, fromSocket) => {
    if(err) throw err
    try {
        gm.newGame(conn.getIdFromSocket(fromSocket))
    } catch (e) {
        conn.sendToSocket(fromSocket, JSON.stringify({type:'ERROR', message:'You already have an open game!'}))
        console.error(e)
    }
})

ee.on('CLOSE_GAME', (err, id) => {
    if(err) throw err
    gm.closeGame(id)
})

ee.on('PRINT_GAMES', (err) => {
    if(err) throw err
    let games = gm.printGames()
    console.log(games)
    conn.broadcast(games)
})

ee.on('UPDATE_USER_INFO', (err, data) => {
    if(err) console.error(err)
    console.log(data.id + ' is sending updated user info')
    conn.updateClientInfo(data)
})

ee.on('PRINT_USERS', (err) => {
    if(err) console.error(err)
    let clients = conn.printConnections()
    console.log(clients)
    conn.broadcast(clients.toString())
})
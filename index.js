const conn = require('./components/Connection')
const ee = require('./components/EventManager').emitter
const GameMaster = require('./components/GameMaster')
const gm = new GameMaster()

console.log('starting...')

// open websocket
conn.start()

// EVENT LISTENERS
ee.on('NEW_GAME', (err, data) => {
    if(err) throw err
    gm.newGame(data)
})

ee.on('CLOSE_GAME', (err, data) => {
    if(err) throw err
    gm.closeGame(data)
})

ee.on('PRINT_GAMES', (err) => {
    if(err) throw err
    let games = gm.printGames()
    console.log(games)
    conn.broadcast(games)
})
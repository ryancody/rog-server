const Game = require('./Game')

module.exports = class GameMaster {

    constructor() {
        this.games = {}
    }

    newGame(creatorId) {

        if (this.getGame(creatorId)) {
            throw creatorId + ' already has an open game!'
        }

        console.log('creating new game for ' + creatorId)

        let newGame = new Game(creatorId)
        this.games[creatorId] = newGame

        return newGame
    }

    getGame(id) {
        return this.games[id]
    }

    closeGame(id) {
        delete this.games[id]
    }

    printGames() {
        return JSON.stringify(this.games)
    }
}
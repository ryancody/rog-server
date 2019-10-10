const Game = require('./Game')

module.exports = class GameMaster {

    constructor() {
        this.games = {}
    }

    newGame(creatorId) {

        if (this.games[creatorId]) {
            throw new Error(creatorId + " already has an open game!")
        }

        let newGame = new Game(creatorId)
        this.games[creatorId] = newGame

        return newGame
    }

    closeGame(id) {
        delete this.games[id]
    }

    printGames() {
        return JSON.stringify(this.games)
    }
}
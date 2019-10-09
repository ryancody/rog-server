const Game = require('./Game')

class GameMaster {

    constructor() {
        this.games = {}
    }

    newGame(creatorId) {

        if (this.games[creatorId]) {
            throw creatorId + " already has an open game!"
        }

        let newGame = new Game(creatorId)
        this.games[creatorId] = newGame
    }

    closeGame(id) {
        delete this.games[id]
    }

    printGames() {
        return JSON.stringify(this.games)
    }
}

let GameMaster = new GameMaster()

module.exports = GameMaster
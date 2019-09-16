module.exports = class GameMaster {

    constructor() {
        this.games = {}
    }

    newGame(creatorId) {

        if (this.games[creatorId]) {
            throw creatorId + " already has an open game!"
        }

        let epoch = new Date().getTime()
        let newGame = { created: epoch, owner: creatorId, game: 'new game' }
        this.games[creatorId] = newGame
    }

    closeGame(id) {
        delete this.games[id]
    }

    printGames() {
        console.log(this.games)
        return this.games
    }
}
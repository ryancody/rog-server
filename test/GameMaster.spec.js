let assert = require('chai').assert
let GameMaster = require('../components/GameMaster')

describe('test GameMaster class', function () {

    let gm = new GameMaster()
    let id = 'tester'

    it('Adds a created game to games list', function () {
        
        let newGame = gm.newGame(id)
        assert.equal(newGame, gm.games[id])
    })

    it('throws an error if a game already exists with current owner ID', function () {

        assert.throws(() => {gm.newGame(id)}, Error, id + ' already has an open game!')
    })

    it('prints games', function () {

    })

    it('closes a game', function () {

        gm.closeGame(id)
        assert.isUndefined(gm.games[id])
    })
})
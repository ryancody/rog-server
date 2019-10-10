let assert = require('chai').assert
let Game = require('../components/Game')

describe('test Game class', function () {

    let id = 'tester'
    let game = new Game(id)

    it('Creates a new game and sets owner to passed ID', function () {
        
        assert.equal(game.owner, id)
    })
})
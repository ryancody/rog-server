let assert = require('chai').assert
let Game = require('../components/Game')

describe('test Game class', function () {

    let date = new Date().getTime()
    let id = 'tester'
    let game = new Game(id)

    it('Creates a new game and sets owner to passed ID', function () {
        
        assert.equal(game.owner, id)
    })

    it('sets property created to current epoch', function () {

        assert.equal(game.created, date)
    })

    it('sets state to empty object', function () {

        assert.equal(JSON.stringify(game.state), JSON.stringify({}))
    })
})
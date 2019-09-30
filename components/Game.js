module.exports = class Game {

    constructor(creator) {

        this.state = {}
        this.created = new Date().getTime()
        this.owner = creator
    }

}
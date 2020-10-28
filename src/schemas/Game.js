const APIResponse = require("./ApiResponse");
const Deck = require("./Deck");

module.exports = class Game {
    constructor(gameId, creator, config) {
        this.gameId = gameId;
        this.creator = creator;
        this.config = config;
        this.players = [];
        this.deck = new Deck();

        this.deck.Generate();
    }

    AddPlayer(newPlayer, callback) {
        const errors = [];

        if (this.config.maxPlayers < this.players.length) {
            errors.push("Player limit reached.");

            callback(new APIResponse());
        }

        this.players.push(newPlayer);
    }

    DrawCards = (n) => this.deck.DrawCards(n);
};

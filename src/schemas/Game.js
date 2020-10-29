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

    AddPlayer = (newPlayer) => {
        if (this.config.maxPlayers < this.players.length) {
            return false;
        }

        this.players.push(newPlayer);

        return true;
    };

    GetPlayer = (uuid) => {
        return this.players.filter((player) => player.uuid === uuid)[0];
    };

    DrawCards = (uuid, n) => {
        let cards = this.deck.DrawCards(n);
        let targetPlayer = this.GetPlayer(uuid);

        targetPlayer.hand = cards;

        this.players = [
            ...this.players.filter((player) => player.uuid !== uuid),
            targetPlayer,
        ];

        return cards;
    };
};

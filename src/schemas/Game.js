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
        if (this.config.maxPlayers <= this.players.length) {
            return false;
        }

        this.players.push(newPlayer);

        return true;
    };

    RemovePlayer = (existingPlayer) => {
        let playerIndex = this.players.findIndex(
            (player) => player.uuid === existingPlayer.uuid
        );

        if (!~playerIndex) {
            return false;
        }

        this.players.splice(playerIndex, 1);

        return true;
    };

    GetPlayer = (uuid) => {
        const player = this.players.filter((player) => player.uuid === uuid)[0];

        if (!player) {
            return false;
        }

        return player;
    };

    GetPlayerCards = (uuid) => {
        let player = this.GetPlayer(uuid);

        if (!player) {
            return false;
        }

        return player.hand;
    };

    GetPlayerBySocketId = (socketId) => {
        return this.players.filter((player) => player.socket === socketId)[0];
    };

    GetPlayers = () => this.players;

    GetTotalPlayers = () => this.players.length;

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

    AttachSocketToPlayer = (uuid, socket) => {
        this.GetPlayer(uuid).socket = socket;
    };
};

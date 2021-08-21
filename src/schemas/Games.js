const APIResponse = require("./ApiResponse");
const Game = require("./Game");

const adjectives = [
    "Salty",
    "Sexy",
    "Boring",
    "Pretty",
    "Cute",
    "Suprising",
    "Bright",
    "Lame",
    "Disgusting",
    "Awesome",
    "Flying",
    "Barren",
    "Happy",
    "Trippy",
    "Healthy",
    "Dying",
    "Suffering",
];

const nouns = [
    "Marcel",
    "Patty",
    "Sebastian",
    "Lobby",
    "Game",
    "Player",
    "Fox",
    "Panda",
    "Cat",
    "Software",
    "Hardware",
];

class Games {
    constructor() {
        this.games = [];
    }

    generateGameId = () => {
        let aSalt = Math.floor(Math.random() * (adjectives.length - 1));
        let nSalt = Math.floor(Math.random() * (nouns.length - 1));

        return adjectives[aSalt] + nouns[nSalt];
    };

    generateUniqueGameId = () => {
        let generatedGameId = this.generateGameId();

        for (let i = 0; i < this.games.length; i++) {
            if (this.games[i].gameid == generatedGameId) {
                while (this.games[i].gameid == generatedGameId) {
                    generatedGameId = this.generateGameId();
                }
            }
        }

        return generatedGameId;
    };

    CreateGame = (creator, bet, maxPlayers) => {
        const newGame = new Game(this.generateUniqueGameId(), creator, {
            bet,
            maxPlayers,
        });

        this.games.push(newGame);

        console.log("[LOBBY] " + newGame.gameId + " has been created.");

        return newGame;
    };

    FetchGames = () => this.games;

    GetLobbyByGameId = (gameId) => {
        const lobby = this.games.filter((lobby) => lobby.gameId === gameId)[0];

        if (!lobby) {
            return false;
        }

        return lobby;
    };

    AddPlayer = (gameId, player) => {
        let targetLobby = this.GetLobbyByGameId(gameId);

        if (!targetLobby) {
            return false;
        }

        if (targetLobby.GetPlayer(player.uuid)) {
            return false;
        }

        return targetLobby.AddPlayer(player);
    };

    RemovePlayer = (gameId, socketId) => {
        let targetLobby = this.GetLobbyByGameId(gameId);

        if (!targetLobby) {
            return false;
        }

        let player = targetLobby.GetPlayerBySocketId(socketId);

        if (!player) {
            return false;
        }

        targetLobby.RemovePlayer(player);

        return true;
    };

    AttachSocketToPlayer = (gameId, uuid, socket) => {
        const lobby = this.GetLobbyByGameId(gameId);

        if (!lobby) {
            return false;
        }

        return lobby.AttachSocketToPlayer(uuid, socket);
    };
}

module.exports = Games;

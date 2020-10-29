const APIResponse = require("./ApiResponse");
const Game = require("./Game");

const lobbys = [];

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
    "b7",
];

const generateGameId = () => {
    let aSalt = Math.floor(Math.random() * (adjectives.length - 1));
    let nSalt = Math.floor(Math.random() * (nouns.length - 1));

    return adjectives[aSalt] + nouns[nSalt];
};

const generateUniqueGameId = () => {
    let generatedGameId = generateGameId();

    for (let i = 0; i < lobbys.length; i++) {
        if (lobbys[i].gameid == generatedGameId) {
            while (lobbys[i].gameid == generatedGameId) {
                generatedGameId = generateGameId();
            }
        }
    }

    return generatedGameId;
};

const Games = {
    CreateGame: (creator, bet, maxPlayers) => {
        const newGame = new Game(generateUniqueGameId(), creator, {
            bet,
            maxPlayers,
        });

        lobbys.push(newGame);

        console.log("[LOBBY] " + newGame.gameId + " has been created.");

        return new APIResponse(false, {
            newGame,
        });
    },
    FetchGames: () => lobbys,
    JoinGame: (gameId, player) => {
        let targetLobby = lobbys.filter((lobby) => lobby.gameId === gameId);

        if (targetLobby.length === 0) {
            return new APIResponse([
                "Lobby with ID " + gameId + " does not exist.",
            ]);
        }

        targetLobby = targetLobby[0];

        if (targetLobby.GetPlayer(player.uuid)) {
            console.log("Player already in lobby!");
            console.log(targetLobby.GetPlayer(player.uuid));
            return new APIResponse(false, {
                drawnCards: targetLobby.GetPlayer(player.uuid).hand,
            });
        }

        targetLobby.AddPlayer(player);

        return new APIResponse(false, {
            drawnCards: targetLobby.DrawCards(player.uuid, 6),
        });
    },
};

module.exports = Games;

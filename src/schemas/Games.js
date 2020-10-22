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
    createGame: (creator, bet) => {
        lobbys.push({
            gameid: generateUniqueGameId(),
            creator,
            bet,
        });
    },
    fetchGames: () => lobbys,
};

module.exports = Games;

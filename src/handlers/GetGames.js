const gameManager = require("../gameManager");

module.exports = (req, res) => {
    res.json({
        games: gameManager.FetchGames().map((game) => ({
            gameId: game.gameId,
            creator: game.creator,
            players: game.GetTotalPlayers(),
            config: {
                bet: game.config.bet,
                maxPlayers: game.config.maxPlayers,
            },
        })),
    });
};

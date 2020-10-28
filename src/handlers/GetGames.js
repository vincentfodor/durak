const Games = require("../schemas/Games");

module.exports = (req, res) => {
    res.json({
        data: Games.FetchGames().map((game) => ({
            gameId: game.gameId,
            creator: game.creator,
            config: {
                bet: game.config.bet,
                maxPlayers: game.config.maxPlayers,
            },
        })),
    });
};

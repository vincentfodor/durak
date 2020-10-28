const Games = require("../schemas/Games");

module.exports = (req, res) => {
    const { gameId } = req.body;

    res.json({
        data: Games.JoinGame(gameId),
    });
};

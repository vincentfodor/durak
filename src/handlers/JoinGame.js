const Games = require("../schemas/Games");

module.exports = (req, res) => {
    const { gameId, player } = req.body;

    res.json(Games.JoinGame(gameId, player));
};

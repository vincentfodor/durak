const gameManager = require("../gameManager");

module.exports = (req, res) => {
    const { creator, bet, maxPlayers } = req.body;

    res.json(gameManager.CreateGame(creator, bet, maxPlayers));
};

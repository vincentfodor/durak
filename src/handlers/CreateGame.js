const Games = require("../schemas/Games");

module.exports = (req, res) => {
    const { creator, bet } = req.body;

    res.json(Games.CreateGame(creator, bet));
};

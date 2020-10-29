const Games = require("../schemas/Games");

module.exports = (req, res) => {
    const { creator, bet } = req.body;

    Games.CreateGame(creator, bet);

    res.end();
};

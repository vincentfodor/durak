const Games = require("../schemas/Games");

module.exports = (req, res) => {
    const { creator, bet } = req.body;

    Games.createGame(creator, bet);

    console.log("Game has been created!");

    res.end();
};

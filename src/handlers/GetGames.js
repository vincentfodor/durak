const Games = require("../schemas/Games");

module.exports = (req, res) => {
    res.json({
        data: Games.fetchGames(),
    });
};

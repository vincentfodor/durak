const gameManager = require("../gameManager");
const APIResponse = require("../schemas/ApiResponse");

module.exports = (req, res) => {
    const { gameId, player } = req.body;

    if (gameManager.AddPlayer(gameId, player)) {
        res.json(new APIResponse(false));
    } else {
        res.json(new APIResponse(["Failed to join lobby"]));
    }

    res.end();
};

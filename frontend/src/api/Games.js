const { default: APIHelper } = require("../helpers/APIHelper");

const Games = {
    Fetch: () => {
        return APIHelper.get("get");
    },
    Create: (user) => {
        return APIHelper.post("create", {
            creator: user.username,
            bet: 1000,
        });
    },
    Join: (gameId, player) => {
        return APIHelper.post("join", {
            gameId,
            player,
        });
    },
};

export default Games;

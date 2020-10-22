const { default: APIHelper } = require("../helpers/APIHelper");

const Games = {
    Fetch: () => {
        return APIHelper.get("getGames");
    },
    Create: (user) => {
        return APIHelper.post("createGame", {
            creator: user.username,
            bet: 1000,
        });
    },
};

export default Games;

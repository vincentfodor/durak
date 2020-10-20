const Users = require("../schemas/Users");

module.exports = (req, res) => {
    const { username, email, password, passwordRepeat } = req.body;

    Users.Register(username, email, password, passwordRepeat, (response) =>
        res.json(response)
    );
};

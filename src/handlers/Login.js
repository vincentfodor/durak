const Users = require("../schemas/Users");

module.exports = (req, res) => {
    const { username, password } = req.body;

    Users.Login(username, password, (response) => {
        res.json(response);
    });
};

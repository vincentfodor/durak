const Users = require("../schemas/Users");

module.exports = (req, res) => {
    const { username, email, password, repeatedPassword } = req.body;

    Users.Register(username, email, password, repeatedPassword, (response) =>
        res.json(response)
    );
};

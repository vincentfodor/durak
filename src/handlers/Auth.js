const Users = require("../schemas/Users");

module.exports = (req, res) => {
    const { authorization } = req.headers;

    Users.Auth(authorization, (response) => {
        res.json(response);
    });
};

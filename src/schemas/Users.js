const DatabaseConnection = require("../database");
const uuid = require("uuid");
const APIResponse = require("./ApiResponse");
const sha256 = require("sha256");
const jwt = require("jsonwebtoken");

const secret =
    "62ba24a71733d4dff170c7d49bb30d4b3c8df69a4ce2017f4dfeaec23c0aad4a";

const Users = {
    Register: (username, email, password, repeatedPassword, callback) => {
        const errors = [];

        DatabaseConnection.query(
            `SELECT users.username, users.email FROM durak.users WHERE username = ? OR email = ?`,
            [username, email],
            (error, response) => {
                if (error) {
                    errors.push("Internal database connection error.");

                    return callback(new APIResponse(errors));
                }

                if (!username || !email || !password || !repeatedPassword) {
                    errors.push("Please fill all required fields.");

                    return callback(new APIResponse(errors));
                }

                if (response.length > 0) {
                    if (response[0].username === username) {
                        errors.push("Sorry, this username is already in use.");
                    }

                    if (response[0].email === email) {
                        errors.push("Sorry, this E-Mail is already in use.");
                    }
                }

                if (errors.length > 0) {
                    return callback(new APIResponse(errors));
                }

                if (username.length > 16) {
                    errors.push(
                        "Sorry, but your username seems to be too long. "
                    );
                }

                if (email.length > 32) {
                    errors.push("Sorry, but your email seems to be too long.");
                }

                if (password !== repeatedPassword) {
                    errors.push("The given passwords did not match.");
                }

                if (errors.length > 0) {
                    return callback(new APIResponse(errors));
                }

                DatabaseConnection.query(
                    `INSERT INTO durak.users (users.username, users.email, users.password, users.uuid) VALUES (?, ?, ?, ?)`,
                    [username, email, sha256(password), uuid.v4()],
                    (error) => {
                        if (error) {
                            errors.push("Internal database connection error.");
                            return callback(new APIResponse(errors));
                        }

                        return callback(new APIResponse(errors), {
                            message: "Account has been created.",
                        });
                    }
                );
            }
        );
    },
    Login: (username, password, callback) => {
        const errors = [];

        DatabaseConnection.query(
            "SELECT \
                users.username, \
                users.password, \
                users.uuid \
            FROM \
                durak.users \
            where \
                users.username = ? AND \
                users.password = ? OR \
                users.email = ? AND \
                users.password = ? \
        ",
            [username, sha256(password), username, sha256(password)],
            (error, response) => {
                if (error) {
                    errors.push("Internal database connection error.");

                    callback(new APIResponse(errors));

                    return false;
                }

                if (response.length <= 0) {
                    errors.push("E-Mail/username or password was not correct.");

                    callback(new APIResponse(errors));

                    return false;
                }

                jwt.sign({ data: username }, secret, (err, token) => {
                    if (err) {
                        errors.push("Authentication error.");

                        callback(new APIResponse(errors));

                        return false;
                    }

                    callback(
                        new APIResponse(errors, {
                            username: response[0].username,
                            email: response[0].email,
                            uuid: response[0].uuid,
                            token,
                        })
                    );

                    return true;
                });
            }
        );
    },
    Auth: (token, callback) => {
        const errors = [];

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                errors.push("Auth-Token validation error.");

                callback(new APIResponse(errors));

                return false;
            }

            DatabaseConnection.query(
                "\
                SELECT \
                    users.username, \
                    users.email, \
                    users.uuid \
                FROM \
                    durak.users \
                WHERE \
                    users.username = ? OR \
                    users.email = ? \
                ",
                [decoded.data, decoded.data],
                (error, response) => {
                    if (error) {
                        errors.push("Internal database connection error.");

                        callback(new APIResponse(errors));

                        return false;
                    }

                    console.log(decoded.data);

                    if (response.length <= 0) {
                        errors.push("Authentication failed, no rows");

                        callback(new APIResponse(errors));

                        return false;
                    }

                    callback(
                        new APIResponse(errors, {
                            username: response[0].username,
                            email: response[0].email,
                            uuid: response[0].uuid,
                        })
                    );

                    return true;
                }
            );
        });
    },
};

module.exports = Users;

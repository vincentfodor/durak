const DatabaseConnection = require("../database");
const uuid = require("uuid");

const Users = {
    Register: (username, email, password, passwordRepeat, callback) => {
        const errors = [];

        DatabaseConnection.query(
            `SELECT users.username, users.email FROM durak.users WHERE username = ? OR email = ?`,
            [username, email],
            (error, response) => {
                if (error) {
                    errors.push("Internal database connection error!");

                    return callback(errors, { success: false });
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
                    return callback({ errors, success: false });
                }

                if (username.length > 16) {
                    errors.push(
                        "Sorry, but your username seems to be too long. "
                    );
                }

                if (email.length > 32) {
                    errors.push("Sorry, but your email seems to be too long.");
                }

                if (password !== passwordRepeat) {
                    errors.push("The given passwords did not match.");
                }

                if (errors.length > 0) {
                    return callback({ errors, success: false });
                }

                DatabaseConnection.query(
                    `INSERT INTO durak.users (users.username, users.email, users.password, users.uuid) VALUES (?, ?, ?, ?)`,
                    [username, email, password, uuid.v4()],
                    (error, response) => {
                        if (error) {
                            errors.push("Internal database connection error!");
                            return callback({ errors, success: false });
                        }

                        return callback({
                            errors: false,
                            success: true,
                            message: "Account has been created!",
                        });
                    }
                );
            }
        );
    },
};

module.exports = Users;

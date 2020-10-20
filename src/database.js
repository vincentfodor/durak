const mysql = require("mysql");

const DatabaseConnection = mysql.createConnection({
    host: "localhost",
    user: "durak",
    password: "*toor2020#",
    database: "durak",
});

module.exports = DatabaseConnection;

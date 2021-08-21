const mysql = require("mysql");

const DatabaseConnection = mysql.createConnection({
    host: "localhost",
    user: "durakc",
    password:
        "5722c26f2f274d25f9adb7409dd53cbc45708312b1226a84ac9c83d2f920ad1a",
    database: "dc",
});

module.exports = DatabaseConnection;

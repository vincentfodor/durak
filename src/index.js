const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 8080;

const RegisterHandler = require("./handlers/Register");
const LoginHandler = require("./handlers/Login");
const AuthHandler = require("./handlers/Auth");
const GetGamesHandler = require("./handlers/GetGames");
const CreateGameHandler = require("./handlers/CreateGame");

const Games = require("./schemas/Games");

//* undefined for local testing like postman or curl
const whitelist = [
    "http://localhost:3000",
    "http://192.168.178.24:3000",
    undefined,
];

var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

Games.createGame("server", 1000, "init");

app.use(cors(corsOptions));

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.post("/register", RegisterHandler);
app.post("/login", LoginHandler);
app.post("/auth", AuthHandler);
app.post("/createGame", CreateGameHandler);

app.get("/getGames", GetGamesHandler);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

io.on("connection", (socket) => {
    console.log("Socket has connected to the server");

    socket.on("sendMessage", (data) => {
        socket.to("ROOM00001").emit("sendMessageCallback", data);
        console.log(data);
    });

    socket.on("disconnect", () => {
        console.log("Socket has disconnected from the server");
    });
});

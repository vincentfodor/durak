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
const JoinGameHandler = require("./handlers/JoinGame");

const gameManager = require("./gameManager");

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

gameManager.CreateGame("server", 1000, 2);

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
app.post("/create", CreateGameHandler);
app.post("/join", (req, res, io) => JoinGameHandler(req, res, io));

app.get("/get", GetGamesHandler);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

io.on("connection", (socket) => {
    console.log("Socket has connected to the server");

    socket.on("loginEvent", (data) => {
        console.log(data);
    });

    socket.on("sendMessage", (data) => {
        socket.to("ROOM00001").emit("sendMessageCallback", data);
        console.log(data);
    });

    socket.on("disconnect", () => {
        console.log("Socket has disconnected from the server");
        //Games.LeaveGame(data.gameId, data.user);
    });

    socket.on("joinGameEvent", (data) => {
        const { gameId, user } = data;

        if (!user.username || !user.email || !user.uuid) {
            throw new Error(
                `[JOIN] Failed to join lobby ${gameId}, user not given.`
            );
        }

        gameManager.AddPlayer(gameId, user);
        gameManager.AttachSocketToPlayer(gameId, user.uuid, socket.id);
    });

    socket.on("leaveGameEvent", (data) => {
        const { gameId } = data;

        console.log("leaveData: " + JSON.stringify(data));
        gameManager.RemovePlayer(gameId, socket.id);
    });
});

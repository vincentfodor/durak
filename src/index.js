const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;

const RegisterHandler = require("./handlers/Register");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.post("/register", RegisterHandler);

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

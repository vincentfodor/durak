const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const port = process.env.PORT || 8080;

const rooms = [
    {
        id: "ROOM00001",
        players: [
            {
                name: "Vincent",
                hand: [
                    {
                        id: 0,
                        value: "A",
                        sign: "♥",
                        color: "#f04a30",
                    },
                    {
                        id: 1,
                        value: "7",
                        sign: "♠",
                        color: "rgba(0, 0, 0, 0.9)",
                    },
                    {
                        id: 2,
                        value: "10",
                        sign: "♠",
                        color: "rgba(0, 0, 0, 0.9)",
                    },
                    {
                        id: 3,
                        value: "J",
                        sign: "♦",
                        color: "#f04a30",
                    },
                    {
                        id: 4,
                        value: "J",
                        sign: "♣",
                        color: "rgba(0, 0, 0, 0.9)",
                    },
                ],
            },
            {
                name: "Marcel",
                hand: [
                    {
                        id: 0,
                        value: "A",
                        sign: "♥",
                        color: "#f04a30",
                    },
                    {
                        id: 1,
                        value: "7",
                        sign: "♠",
                        color: "rgba(0, 0, 0, 0.9)",
                    },
                    {
                        id: 2,
                        value: "10",
                        sign: "♠",
                        color: "rgba(0, 0, 0, 0.9)",
                    },
                    {
                        id: 3,
                        value: "J",
                        sign: "♦",
                        color: "#f04a30",
                    },
                    {
                        id: 4,
                        value: "J",
                        sign: "♣",
                        color: "rgba(0, 0, 0, 0.9)",
                    },
                ],
            },
        ],
    },
];

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

io.on("connection", (socket) => {
    console.log("Socket has connected to the server");

    socket.join("ROOM00001", (err) => {
        if (err) {
            console.log(err);
        }

        console.log('Socket has joined room "ROOM00001"');
    });

    socket.on("sendMessage", (data) => {
        socket.to("ROOM00001").emit("sendMessageCallback", data);
        console.log(data);
    });

    socket.on("disconnect", () => {
        console.log("Socket has disconnected from the server");
    });
});

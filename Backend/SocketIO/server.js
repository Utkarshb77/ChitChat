import { Server } from "socket.io";
import http from "http";
import express from "express";
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});

export const getReceiverSocketId = (userId) => {
    return users[userId];
}
const users = {};

io.on("connection", (socket) => {
    console.log("New User Connected");
    const userId = socket.handshake.query.userId;

    if (userId) {
        users[userId] = socket.id
    }

    console.log(users)

    io.emit("getonlineusers", Object.keys(users))
    socket.on("disconnect", () => {
        console.log("User Disconnected");
        delete users[userId];
        io.emit("getonlineusers", Object.keys(users))
    })
});

export { app, io, server };
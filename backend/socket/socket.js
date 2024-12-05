import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173/'],
        methods: ['GET', 'POST'],
    },
});

const userSocketMap = {};

io.on("connection", (socket) => {
    console.log("Connection established", socket.id)

    const userId = socket.handshake.query.userId;

})

export { io, app, server }
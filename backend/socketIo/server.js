const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const users={};
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    },
});

const getrecieverSocketId = (recieverId)=>{
    return users[recieverId];
}

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    const userId=socket.handshake.query.userId;
    if(userId){
        users[userId]=socket.id;
        console.log("hello",users);
    }
    io.emit("getonlineusers",Object.keys(users));

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        delete users[userId];
        io.emit("getonlineusers",Object.keys(users));
    });
});

module.exports = { app, io, server, getrecieverSocketId };


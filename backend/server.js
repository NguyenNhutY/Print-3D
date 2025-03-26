require("dotenv").config();
const express = require("express");
const http = require("http");
const { SerialPort } = require("serialport");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

const port = new SerialPort({
    path: process.env.SERIAL_PORT,
    baudRate: parseInt(process.env.BAUD_RATE),
});
console.log("Serial Port:", process.env.SERIAL_PORT);
console.log("Baud Rate:", process.env.BAUD_RATE);
console.log("Server Port:", process.env.PORT);
port.on("open", () => console.log("Máy in 3D đã kết nối!"));

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("send-gcode", (gcode) => {
        console.log("Sending G-code:", gcode);
        port.write(gcode + "\n");
    });

    socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(process.env.PORT, () =>
    console.log(`Server chạy tại http://localhost:${process.env.PORT}`)
);

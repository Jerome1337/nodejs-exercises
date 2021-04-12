const express = require("express");
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

const history = [];
let users = [];

io.on("connection", (socket) => {
  console.log("A new user is connected");

  users.push({
    id: socket.id,
    username: `User ${socket.id}`,
  });

  io.emit("user connected", users);

  io.emit("history", history);

  socket.on("disconnect", () => {
    console.log("A user disconnected");

    const updatedUsers = users.filter((user) => user.id !== socket.id);
    users = updatedUsers;

    io.emit("user disconnected", socket.id);
  });

  socket.on("message", (message) => {
    if (history.length > 15) {
      history.shift();
    }

    history.push(message);

    io.emit("message", message);
  });

  socket.on("pm", (socketId, message) => {
    socket.to(socketId).emit("pm", socket.id, message);
  });
});

http.listen(3000, () => {
  console.log("Chat server is ready");
});

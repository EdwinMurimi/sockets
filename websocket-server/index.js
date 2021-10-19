const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
require("dotenv").config();

io.on("connection", (socket) => {
  console.log(`Connected successfully`);

  socket.on("message", (payload) => {
    io.emit(`message: ${payload}`);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`app listening on port:${PORT}`);
});

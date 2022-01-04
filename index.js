const express = require("express");
const socket = require("socket.io");
const app = express();

// Define the port to run on
const port = process.env.PORT || 8080;

// Listen to the port
const server = app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

// Serve static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection", (socket) => {
  console.log("made socket connection");
});

// Make socket connection
const socket = io.connect("http://localhost:8080");

// Query DOM
const message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output");

// Emit events
btn.addEventListener("click", () => {
  socket.emit("chat", { message: message.value, handle: handle.value });
});

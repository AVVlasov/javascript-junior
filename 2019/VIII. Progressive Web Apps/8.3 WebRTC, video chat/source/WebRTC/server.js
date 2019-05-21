var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
http.listen(5000, function() {
  console.log("listening on *:5000");
});
io.on("connection", function(socket) {
  function log() {
    var array = [">>> "];
    for (var i = 0; i < arguments.length; i++) {
      array.push(arguments[i]);
    }
    socket.emit("log", array);
  }
  socket.on("message", function(message) {
    log("Got message: ", message);
    socket.broadcast.emit("message", message);
  });
  socket.on("create or join", function(room) {
    var numClients = io.sockets.clients(room).length;
    log("Room " + room + " has " + numClients + " client(s)");
    log("Request to create or join room", room);
    if (numClients == 0) {
      socket.join(room);
      socket.emit("created", room);
    } else if (numClients > 0) {
      io.sockets.in(room).emit("join", room);
      socket.join(room);
      socket.emit("joined", room);
    } else {
      socket.emit("full", room);
    }
    socket.emit("emit(): client " + socket.id + " joined room " + room);
    socket.broadcast.emit(
      "broadcast(): client " + socket.id + " joined room " + room
    );
  });
});

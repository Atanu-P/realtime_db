const socket_io = require("socket.io");
const io = socket_io();
const User = require("./models/User");
const changeStream = User.watch();

console.log(User.find());
User.find()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
changeStream.on("change", (change) => {
  console.log(change);
  io.emit("changeData", change);
});

io.on("connection", () => {
  console.log("connected");
});

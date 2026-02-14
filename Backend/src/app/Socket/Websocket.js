const WebSocket = require("ws");
const http = require("http");
const Messages = require("../models/Message");
const Rooms = require("../models/Room");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const funcwss = (app) => {
  try {
    var server = http.createServer(app);
    server.listen(3000, function () {
      console.log("Server chạy: http://localhost:3000");
    });
    var wss = new WebSocket.Server({ server: server });
    wss.on("connection", function (ws) {
      ws.on("message", async function (data) {
        const message = JSON.parse(data.toString());
        if (message.type === "chat") {
          try {
            var decoded = jwt.verify(
              message.token,
              process.env.ACCESS_TOKEN_SECRET,
            );
            var senderId = decoded.id;
            const checkRoom = await Rooms.findOne({ members: senderId });
            if (!checkRoom) {
              var newRoom = await Rooms.create({
                members: [senderId, "68312c8c7209bb2eae1eace1"],
                lastMessage: message.content,
              });
              await Messages.create({
                roomId: newRoom._id,
                sender: senderId,
                content: message.content,
              });
            } else {
              await Messages.create({
                roomId: checkRoom._id,
                sender: senderId,
                content: message.content,
              });
            }
          } catch (err) {
            console.error("❌ Lỗi xử lý tin nhắn:", err);
          }
        }
      });
    });
    return wss;
  } catch (err) {
    console.log("Loi: ", err);
  }
};
module.exports = funcwss;

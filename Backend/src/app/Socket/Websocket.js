const WebSocket = require("ws");
const http = require("http");
const Messages = require("../models/Message");
const Rooms = require("../models/Room");
const jwt = require("jsonwebtoken");
const url = require("url");
require("dotenv").config();
const clients = new Map();

function sendToUser(userId, data) {
  const idStr = userId.toString();
  const clientWs = clients?.get(idStr);
  clientWs?.send(JSON.stringify(data));
}

const funcwss = (app) => {
  try {
    var server = http.createServer(app);
    server.listen(3000, function () {
      console.log("Server chạy: http://localhost:3000");
    });
    var wss = new WebSocket.Server({ server: server });
    wss.on("connection", function (ws, req) {
      const parameters = url.parse(req.url, true);
      const token = parameters.query.token;
      var decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      var userId = decoded.id;
      clients.set(userId, ws);
      ws.on("message", async function (data) {
        const message = JSON.parse(data.toString());
        if (message.type === "chat") {
          try {
            const checkRoom = await Rooms.findOne({ members: userId });
            if (!checkRoom) {
              var newRoom = await Rooms.create({
                members: [userId, "68312c8c7209bb2eae1eace1"],
              });
              var newMessage = await Messages.create({
                roomId: newRoom._id,
                sender: userId,
                content: message.content,
              });
              await Rooms.findByIdAndUpdate(newRoom._id, {
                lastMessage: newMessage._id,
              });
              var receiverId = newRoom.members.find((i) => i != userId);
            } else {
              var receiverId = checkRoom.members.find((i) => i != userId);
              var newMessage = await Messages.create({
                roomId: checkRoom._id,
                sender: userId,
                content: message.content,
              });
              await Rooms.findByIdAndUpdate(checkRoom._id, {
                lastMessage: newMessage._id,
              });
            }
            sendToUser(receiverId, { message: newMessage });
          } catch (err) {
            console.error("❌ Lỗi xử lý tin nhắn:", err);
          }
        }
        ws.on("close", () => {
          clients.delete(userId);
        });
      });
    });
    return wss;
  } catch (err) {
    console.log("Loi: ", err);
  }
};
module.exports = funcwss;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Room",
    },
    content: {
      type: String,
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // Tự động thêm createdAt, updatedAt
  },
);

module.exports = mongoose.model("Message", message);

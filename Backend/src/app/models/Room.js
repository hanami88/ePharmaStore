const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const room = new Schema(
  {
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
      default: null,
    },
    members: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      validate: {
        validator: function (arr) {
          return arr.length === 2;
        },
        message: "Phòng chat phải có đúng 2 thành viên",
      },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Room", room);

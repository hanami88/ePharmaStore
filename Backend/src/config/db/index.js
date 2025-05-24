const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Phamarcity", {});
    console.log("KET NOI THANH CONG");
  } catch (error) {
    console.log("fail", error.message);
  }
}

module.exports = { connect };

const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Phamarcity", {});
    console.log("KET NOI THANH CONG");
  } catch (error) {
    console.log("fail");
  }
}

module.exports = { connect };

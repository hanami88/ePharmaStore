const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("KET NOI THANH CONG");
  } catch (error) {
    console.log("fail", error.message);
  }
}

module.exports = { connect };

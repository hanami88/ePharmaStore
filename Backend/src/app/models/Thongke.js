const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Thongke = new Schema({
  doanhthu: { type: Number },
  khachmuahang: { type: Number },
  donhang: { type: Number },
  sanphambanra: { type: Number },
  thang: { type: String },
  nam: { type: String },
});
Thongke.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("Thongke", Thongke);

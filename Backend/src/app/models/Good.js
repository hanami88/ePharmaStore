const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Good = new Schema({
  tensp: { type: String },
  giamgia: { type: Number },
  soluong: { type: Number },
  nhacungcap: { type: String },
  donvi: { type: String },
  mota: { type: String },
  hinhanh: { type: String },
  danhmuc: { type: String },
  giaban: { type: Number },
  giagoc: { type: Number },
  soluongdaban: { type: Number },
});
Good.index({ tensp: "text" });
Good.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("Good", Good);

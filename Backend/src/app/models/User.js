const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const Good = new Schema({
  tensp: String,
  giamgia: Number,
  soluong: Number,
  nhacungcap: String,
  banchay: Boolean,
  donvi: String,
  mota: String,
  hinhanh: String,
  danhmuc: String,
  giaban: Number,
  giagoc: Number,
});
const AddressSchema = new Schema(
  {
    hoten: String,
    sdt: String,
    tinhthanh: String,
    quanhuyen: String,
    phuongxa: String,
    sonha: String,
    loai: String,
    macdinh: Boolean,
    duocchon: Boolean,
  },
  { _id: false }
);
const User = new Schema({
  username: { type: String },
  password: { type: String },
  role: { type: String },
  diachi: [AddressSchema],
  email: { type: String },
  gioitinh: { type: String },
  hinhanh: { type: String },
  hoten: { type: String },
  ngaysinh: { type: String },
  sdt: { type: String },
  giohang: [Good],
});
User.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("User", User);

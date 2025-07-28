const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const Good = new Schema({
  tensp: String,
  giamgia: Number,
  soluong: Number,
  nhacungcap: String,
  donvi: String,
  mota: String,
  hinhanh: String,
  danhmuc: String,
  giaban: Number,
  giagoc: Number,
});
const User = new Schema({
  sdt: { type: String },
  password: { type: String },
  role: { type: String },
  diachi: { type: String },
  email: { type: String },
  gioitinh: { type: String },
  hinhanh: { type: String },
  hoten: { type: String },
  ngaysinh: { type: String },
  giohang: [Good],
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
const Order = new Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    giohang: [Good], // Dữ liệu giỏ hàng đã "chốt"
    tongtien: Number, // Tổng tiền đơn
    trangthai: { type: String, default: "Chờ xác nhận" }, // Trạng thái đơn
    thanhtoan: String,
    ghichu: String,
    diachi: AddressSchema,
  },
  {
    timestamps: true,
  }
);
Order.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("Order", Order);

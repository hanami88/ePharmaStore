const Goods = require("../models/Good");
const Orders = require("../models/Order");
const Thongkes = require("../models/Thongke");
const Users = require("../models/User");
const Messages = require("../models/Message");
const Rooms = require("../models/Room");

class AdminController {
  home(req, res, next) {
    res.render("admin/adhome", { layout: "admin" });
  }
  async quanlykhachhang(req, res) {
    try {
      let user = await Users.find({}).lean();
      res.render("admin/quanlykhachhang", {
        layout: "admin",
        user,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async timkiemkhachhang(req, res) {
    try {
      const { keyword, top } = req.body;
      const query = {};
      if (keyword && keyword.trim() !== "") {
        query.hoten = { $regex: keyword.trim(), $options: "i" };
      }
      let userQuery = Users.find(query).lean();
      if (top === "true") {
        userQuery = userQuery.sort({ tongtiendadung: -1 });
      }
      const user = await userQuery;
      res.render("admin/quanlykhachhang", {
        layout: "admin",
        user,
        filters: { keyword, top },
      });
    } catch (err) {
      console.error(err);
      res.send("ERROR");
    }
  }
  async thongke(req, res) {
    const topGoods = await Goods.find({})
      .sort({ soluongdaban: -1 })
      .limit(20)
      .lean();
    const now = new Date();
    const thangHienTai = String(now.getMonth() + 1).padStart(2, "0");
    const namHienTai = String(now.getFullYear());
    let thangInt = Number(thangHienTai);
    let namtruoc = 0;
    let thangtruoc = 0;
    if (thangInt > 1) {
      thangtruoc = thangInt - 1;
      namtruoc = Number(namHienTai);
    } else {
      thangtruoc = 12;
      namtruoc = Number(namHienTai) - 1;
    }
    let thongke = await Thongkes.findOne({
      thang: thangHienTai,
      nam: namHienTai,
    }).lean();
    let thongkethangtruoc = await Thongkes.findOne({
      thang: String(thangtruoc).padStart(2, "0"),
      nam: namtruoc,
    }).lean();
    let doanhthu = true;
    let khachmuahang = true;
    let donhang = true;
    let spbanra = true;
    if (thongke && thongkethangtruoc) {
      doanhthu = thongke.doanhthu > thongkethangtruoc.doanhthu;
      khachmuahang = thongke.khachmuahang > thongkethangtruoc.khachmuahang;
      donhang = thongke.donhang > thongkethangtruoc.donhang;
      spbanra = thongke.sanphambanra > thongkethangtruoc.sanphambanra;
    }
    try {
      res.render("admin/thongke", {
        layout: "admin",
        thongke,
        topGoods,
        doanhthu,
        khachmuahang,
        donhang,
        spbanra,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async capnhatthongtin(req, res, next) {
    res.cookie("message", "Cập nhật thông tin thành công", { maxAge: 1500 });
    const user = await Users.findById(req.params.id);
    await Users.findByIdAndUpdate(req.params.id, {
      hinhanh: req.file ? req.file.filename : user.hinhanh,
      hoten: req.body.hoten,
      ngaysinh: req.body.ngaysinh,
      gioitinh: req.body.gioitinh,
    });
    res.redirect(`/admin/${req.params.id}/chitietkhachhang`);
  }
  async trangdoiemail(req, res, next) {
    try {
      res.render("admin/doiemail", {
        layout: "admin",
        id: req.params.id,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async trangmatkhau(req, res, next) {
    try {
      res.render("admin/doimatkhau", {
        layout: "admin",
        id: req.params.id,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async thongketheothoigian(req, res) {
    const topGoods = await Goods.find({})
      .sort({ soluongdaban: -1 })
      .limit(20)
      .lean();
    const [nam, thang] = req.body.thangnam.split("-");
    let thangInt = Number(thang);
    let namtruoc = 0;
    let thangtruoc = 0;
    if (thangInt > 1) {
      thangtruoc = thangInt - 1;
      namtruoc = Number(nam);
    } else {
      thangtruoc = 12;
      namtruoc = Number(nam) - 1;
    }
    let thongke = await Thongkes.findOne({
      thang: thang,
      nam: nam,
    }).lean();
    let thongkethangtruoc = await Thongkes.findOne({
      thang: String(thangtruoc).padStart(2, "0"),
      nam: namtruoc,
    }).lean();
    let doanhthu = true;
    let khachmuahang = true;
    let donhang = true;
    let spbanra = true;
    if (thongke && thongkethangtruoc) {
      doanhthu = thongke.doanhthu > thongkethangtruoc.doanhthu;
      khachmuahang = thongke.khachmuahang > thongkethangtruoc.khachmuahang;
      donhang = thongke.donhang > thongkethangtruoc.donhang;
      spbanra = thongke.sanphambanra > thongkethangtruoc.sanphambanra;
    }
    try {
      res.render("admin/thongke", {
        layout: "admin",
        thongke,
        topGoods,
        doanhthu,
        khachmuahang,
        donhang,
        spbanra,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  dangxuat(req, res, next) {
    res.clearCookie("token", { httpOnly: true });
    res.redirect("/");
  }
  async create(req, res) {
    let form = new Goods(req.body);
    form.giaban =
      Math.floor(parseInt(form.giagoc * ((100 - form.giamgia) / 100)) / 1000) *
      1000;
    form.hinhanh = req.file ? req.file.filename : "";
    form.soluongdaban = 0;
    try {
      await form.save();
      res.json({ success: true });
    } catch (err) {
      res.send(err);
    }
  }
  async quanlysanpham(req, res) {
    try {
      let [good, count] = await Promise.all([
        Goods.find({}).lean(),
        Goods.countDocumentsWithDeleted({ deleted: true }),
      ]);
      const message = req.cookies.message || null;
      res.clearCookie("message");
      res.render("admin/quanlysanpham", {
        layout: "admin",
        good,
        count,
        message,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async timkiemsanpham(req, res) {
    try {
      const { keyword, danhmuc, banchay } = req.body;
      const message = req.cookies.message || null;
      const query = {};
      if (keyword && typeof keyword === "string" && keyword.trim() !== "") {
        query.$text = { $search: keyword.trim() };
      }
      if (danhmuc && danhmuc !== "") {
        query.danhmuc = danhmuc;
      }
      if (banchay !== "") {
        query.banchay = banchay === "true";
      }
      let [good, count] = await Promise.all([
        Goods.find(query).lean(),
        Goods.countDocumentsWithDeleted({ deleted: true }),
      ]);
      res.clearCookie("message");
      res.render("admin/quanlysanpham", {
        layout: "admin",
        message,
        good,
        count,
        filters: { keyword, danhmuc, banchay },
      });
    } catch (err) {
      res.send("ERROR");
    }
  }

  async quanlydonhang(req, res) {
    try {
      let [order, count] = await Promise.all([
        Orders.find({ trangthai: { $ne: 3 } })
          .populate("userid", "sdt hoten")
          .lean(),
        Orders.countDocumentsWithDeleted({ deleted: true }),
      ]);
      const message = req.cookies.message || null;
      res.clearCookie("message");
      res.render("admin/quanlydonhang", {
        layout: "admin",
        order,
        count,
        message,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async chitietkhachhang(req, res) {
    try {
      const user = await Users.findById(req.params.id).lean();
      res.render("admin/chitietkhachhang", {
        layout: "admin",
        user,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async timkiemdonhang(req, res) {
    try {
      const { keyword, thoigian } = req.body;
      const message = req.cookies.message || null;
      let query = { trangthai: { $ne: "Đã huỷ" } };
      if (thoigian) {
        const start = new Date(thoigian);
        const end = new Date(thoigian);
        end.setHours(23, 59, 59, 999);

        query.createdAt = { $gte: start, $lte: end };
      }
      let orders = await Orders.find(query)
        .populate("userid", "sdt hoten")
        .lean();
      if (keyword && keyword.trim() !== "") {
        const keywordRegex = new RegExp(keyword.trim(), "i");
        orders = orders.filter((order) =>
          keywordRegex.test(order.userid?.sdt || ""),
        );
      }
      const count = await Orders.countDocumentsWithDeleted({ deleted: true });
      res.clearCookie("message");
      res.render("admin/quanlydonhang", {
        layout: "admin",
        order: orders,
        count,
        message,
        filters: { keyword, thoigian },
      });
    } catch (err) {
      console.error(err);
      res.status(400).send("ERROR");
    }
  }

  async suasanpham(req, res) {
    try {
      let good = await Goods.findById(req.params.id).lean();
      res.render("admin/suasanpham", { layout: "admin", good });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async doiemail(req, res, next) {
    res.cookie("message", "Đổi email thành công!", { maxAge: 1500 });
    await Users.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
    });
    res.redirect(`/admin/${req.params.id}/chitietkhachhang`);
  }
  async doimatkhau(req, res, next) {
    try {
      await Users.findByIdAndUpdate(req.params.id, {
        password: req.body.newPassword,
      });
      res.cookie("message", "Đổi mật khẩu thành công!", { maxAge: 1500 });
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.json({ success: false });
    }
  }
  async chitietdonhang(req, res) {
    try {
      let thongtin = await Orders.findById(req.body.id).populate(
        "userid",
        "hoten sdt",
      );
      res.json({ thongtin });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }

  async update(req, res) {
    try {
      let form = req.body;
      form.banchay = form.banchay === "on";
      form.giaban =
        Math.floor(
          parseInt(form.giagoc * ((100 - form.giamgia) / 100)) / 1000,
        ) * 1000;
      form.hinhanh = req.file ? req.file.filename : req.body.oldImage;
      await Goods.updateOne({ _id: req.params.id }, form);
      res.redirect("/admin/quanlysanpham");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async softdeletesanpham(req, res) {
    try {
      await Goods.delete({ _id: req.params.id });
      res.cookie("message", "Xoá sản phẩm thành công!", { maxAge: 1500 });
      res.redirect("/admin/quanlysanpham");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async softdeletedonhang(req, res) {
    try {
      await Orders.delete({ _id: req.params.id });
      res.cookie("message", "Xoá sản phẩm thành công!", { maxAge: 1500 });
      res.redirect("/admin/quanlydonhang");
    } catch (err) {
      res.send("ERROR");
    }
  }

  async xacnhandonhang(req, res) {
    try {
      const order = await Orders.findById(req.params.id);
      const user = await Users.findById(order.userid);
      order.trangthai = "Đã xác nhận";
      for (const i of order.giohang) {
        const hanghoa = await Goods.findById(i._id);
        if (!hanghoa) continue;
        await Goods.findByIdAndUpdate(i._id, {
          soluongdaban: hanghoa.soluongdaban + i.soluong,
          soluong: hanghoa.soluong - i.soluong,
        });
      }
      await Users.findByIdAndUpdate(order.userid, {
        tongtiendadung: (user.tongtiendadung || 0) + (order.tongtien || 0),
      });
      const now = new Date();
      const thangHienTai = String(now.getMonth() + 1);
      const namHienTai = String(now.getFullYear());
      let thongke = await Thongkes.findOne({
        thang: thangHienTai,
        nam: namHienTai,
      });
      if (thongke) {
        thongke.doanhthu += order.tongtien / 1000000;
        thongke.khachmuahang += 1;
        thongke.donhang += 1;
        thongke.sanphambanra += Number(order.giohang.length);
      } else {
        thongke = new Thongkes({
          thang: thangHienTai,
          nam: namHienTai,
          doanhthu: order.tongtien / 1000000,
          khachmuahang: 1,
          donhang: 1,
          sanphambanra: Number(order.giohang.length),
        });
      }
      await Promise.all([thongke.save(), order.save(), user.save()]);
      res.cookie("message", "Xác nhận đơn hàng thành công!", { maxAge: 1500 });
      res.redirect("/admin/quanlydonhang");
    } catch (err) {
      console.error("Lỗi xác nhận đơn hàng:", err);
      res.send("ERROR");
    }
  }
  async trashsanpham(req, res) {
    try {
      let good = await Goods.findWithDeleted({ deleted: true });
      good = good.map((temp) => temp.toObject());
      const message = req.cookies.message || null;
      res.clearCookie("message");
      res.render("admin/trashsanpham", { layout: "admin", good, message });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async trashdonhang(req, res) {
    try {
      let order = await Orders.findWithDeleted({ deleted: true }).populate(
        "userid",
        "sdt hoten",
      );
      const message = req.cookies.message || null;
      res.clearCookie("message");
      order = order.map((temp) => temp.toObject());
      res.render("admin/trashdonhang", { layout: "admin", order, message });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async restoresanpham(req, res) {
    try {
      await Goods.restore({ _id: req.params.id });
      res.redirect("/admin/trashsanpham");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async restoredonhang(req, res) {
    try {
      await Orders.restore({ _id: req.params.id });
      res.redirect("/admin/trashdonhang");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async deletesanpham(req, res) {
    try {
      await Goods.deleteOne({ _id: req.params.id });
      res.cookie("message", "Xoá sản phẩm thành công!", { maxAge: 1500 });
      res.redirect("/admin/trashsanpham");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async deletedonhang(req, res) {
    try {
      await Orders.deleteOne({ _id: req.params.id });
      res.cookie("message", "Xoá đơn hàng thành công!", { maxAge: 1500 });
      res.redirect("/admin/trashdonhang");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async chamsockhachhang(req, res) {
    try {
      let rooms = await Rooms.find()
        .populate("lastMessage")
        .populate("members")
        .lean();
      rooms = rooms.map((i) => {
        return {
          ...i,
          members: i.members.find(
            (id) => id._id.toString() != req.user._id.toString(),
          ),
        };
      });
      res.render("admin/chamsockhachhang", {
        layout: "admin",
        rooms,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new AdminController();

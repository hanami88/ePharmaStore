const Goods = require("../models/Good");
const Orders = require("../models/Order");

class AdminController {
  home(req, res, next) {
    res.render("admin/adhome", { layout: "admin" });
  }
  dangxuat(req, res, next) {
    res.clearCookie("token", { httpOnly: true });
    res.redirect("/");
  }
  async create(req, res) {
    let form = new Goods(req.body);
    form.banchay = form.banchay === "on";
    form.giaban =
      Math.floor(parseInt(form.giagoc * ((100 - form.giamgia) / 100)) / 1000) *
      1000;
    form.hinhanh = req.file ? req.file.filename : "";
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

  async quanlydonhang(req, res) {
    try {
      let [order, count] = await Promise.all([
        Orders.find({ trangthai: { $ne: "Đã huỷ" } })
          .populate("userid", "username hoten")
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
  async suasanpham(req, res) {
    try {
      let good = await Goods.findById(req.params.id).lean();
      res.render("admin/suasanpham", { layout: "admin", good });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async chitietdonhang(req, res) {
    try {
      let thongtin = await Orders.findById(req.body.id).populate(
        "userid",
        "username diachi hoten sdt"
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
          parseInt(form.giagoc * ((100 - form.giamgia) / 100)) / 1000
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
      await Orders.findByIdAndUpdate(req.params.id, {
        trangthai: "Đã xác nhận",
      });
      res.cookie("message", "Xác nhận đơn hàng thành công!", { maxAge: 1500 });
      res.redirect("/admin/quanlydonhang");
    } catch (err) {
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
        "username hoten"
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
}

module.exports = new AdminController();

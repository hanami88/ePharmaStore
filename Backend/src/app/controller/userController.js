const Goods = require("../models/Good");
const Users = require("../models/User");
const Orders = require("../models/Order");
const User = require("../models/User");

class UserController {
  thongtin(req, res, next) {
    const message = req.cookies.message || null;
    res.render("thongtin", { message });
  }
  giohang(req, res, next) {
    res.render("giohang");
  }
  doimatkhau(req, res, next) {
    res.render("doimatkhau");
  }

  capnhatemail(req, res, next) {
    res.render("capnhatemail");
  }

  async doiemail(req, res, next) {
    res.cookie("message", "Đổi email thành công!", { maxAge: 1500 });
    await Users.findByIdAndUpdate(req.user._id, {
      email: req.body.email,
    });
    res.redirect("/user/thongtin");
  }

  async doimk(req, res, next) {
    res.cookie("message", "Đổi mật khẩu thành công!", { maxAge: 1500 });
    await Users.findByIdAndUpdate(req.user._id, {
      password: req.body.newPassword,
    });
    res.json({ success: true });
  }
  async capnhatthongtin(req, res, next) {
    res.cookie("message", "Cập nhật thông tin thành công", { maxAge: 1500 });
    await Users.findByIdAndUpdate(req.user._id, {
      hinhanh: req.file ? req.file.filename : req.user.hinhanh,
      hoten: req.body.hoten,
      ngaysinh: req.body.ngaysinh,
      gioitinh: req.body.gioitinh,
    });
    res.redirect("/user/thongtin");
  }
  async kiemtramatkhau(req, res, next) {
    try {
      const { currentPassword } = req.body;
      const user = await Users.findById(req.user._id);
      if (!user) return res.status(404).json({ valid: false });
      if (user.password === currentPassword) {
        res.json({ valid: true });
      } else {
        res.json({ valid: false });
      }
    } catch (err) {
      console.error("Lỗi kiểm tra mật khẩu:", err);
      res.status(500).json({ valid: false });
    }
  }

  async chitietlichsudonhang(req, res, next) {
    let id = req.params.id;
    let donhang = await Orders.findById(id).lean();
    res.render("chitietlichsudonhang", {
      donhang,
    });
  }
  async chitietlichsudonhangdahuy(req, res, next) {
    let id = req.params.id;
    let donhang = await Orders.findById(id).lean();
    res.render("chitietlichsudonhangdahuy", {
      donhang,
    });
  }
  async chitietlichsudonhangdaxacnhan(req, res, next) {
    let id = req.params.id;
    let donhang = await Orders.findById(id).lean();
    res.render("chitietlichsudonhangdaxacnhan", {
      donhang,
    });
  }
  async lichsudonhang(req, res, next) {
    let donhangcuatoi = await Orders.find({
      userid: req.user._id,
      trangthai: "Chờ xác nhận",
    }).lean();
    res.render("lichsudonhang", {
      donhangcuatoi: donhangcuatoi,
    });
  }
  async huydonhang(req, res) {
    await Orders.findByIdAndUpdate(req.body.madonhang, {
      trangthai: "Đã huỷ",
    });
    res.redirect("/user/lichsudonhang");
  }
  async khoiphucdonhang(req, res) {
    await Orders.findByIdAndUpdate(req.body.madonhang, {
      trangthai: "Chờ xác nhận",
    });
    res.redirect("/user/lichsudonhangdahuy");
  }
  async lichsudonhangdahuy(req, res, next) {
    let donhangcuatoi = await Orders.find({
      userid: req.user._id,
      trangthai: "Đã huỷ",
    }).lean();
    res.render("lichsudonhangdahuy", {
      donhangcuatoi: donhangcuatoi,
    });
  }
  async lichsudonhangdaxacnhan(req, res, next) {
    let donhangcuatoi = await Orders.find({
      userid: req.user._id,
      trangthai: "Đã xác nhận",
    }).lean();
    res.render("lichsudonhangdaxacnhan", {
      donhangcuatoi: donhangcuatoi,
    });
  }
  diachinhanhang(req, res, next) {
    const message = req.cookies.message || null;
    res.render("diachinhanhang", { message });
  }

  async xoadiachi(req, res, next) {
    const user = await Users.findById(req.user._id);
    user.diachi.splice(req.body.index, 1);
    await user.save();
    res.json();
  }
  async themdiachi(req, res, next) {
    try {
      const user = await Users.findById(req.user._id);
      const diachi = {
        hoten: req.body.hoten,
        sdt: req.body.sdt,
        tinhthanh: req.body.tinhthanh,
        quanhuyen: req.body.quanhuyen,
        phuongxa: req.body.phuongxa,
        sonha: req.body.sonha,
        loai: req.body.loai,
        macdinh: req.body.macdinh === "on",
      };
      user.diachi.push(diachi);
      await user.save();
      res.cookie("message", "Thêm địa chỉ mới thành công", { maxAge: 1500 });
      res.redirect("/user/diachinhanhang");
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }

  logout(req, res, next) {
    res.clearCookie("token", { httpOnly: true });
    res.redirect("/");
  }

  async themvaogiohang(req, res, next) {
    try {
      let [user, good] = await Promise.all([
        Users.findById(req.user._id),
        Goods.findById(req.body.id),
      ]);
      good.soluong = parseInt(req.body.soluong);
      user.giohang.push(good);
      await user.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }

  async congdonhang(req, res) {
    try {
      let user = await Users.findById(req.user);
      user.giohang[req.body.index].soluong++;
      await user.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }

  async trudonhang(req, res) {
    try {
      let user = await Users.findById(req.user);
      user.giohang[req.body.index].soluong--;
      await user.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }

  async xoadonhang(req, res) {
    try {
      let user = await Users.findById(req.user);
      user.giohang.splice(req.body.index, 1);
      await user.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
  async trangdathang(req, res) {
    try {
      res.render("trangdathang");
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
  async doidiachinhanhang(req, res) {
    if (!req.body.diachi) {
      res.render("trangdathang");
    }
    let user = await Users.findById(req.user);
    user.diachi.forEach((i) => {
      i.duocchon = "false";
    });
    user.diachi[req.body.diachi].duocchon = "true";
    await user.save();
    let updatedUser = await Users.findById(req.user).lean();
    try {
      res.render("trangdathang", { user: updatedUser });
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
  async dathang(req, res) {
    try {
      let user = await Users.findById(req.user);
      let diachi1 = user.diachi.find((i) => i.duocchon);
      let sum = 0;
      user.giohang.forEach((i) => (sum += i.giaban * i.soluong));
      let order = new Orders({
        userid: req.user,
        giohang: user.giohang,
        tongtien: sum,
        thanhtoan: "COD",
        ghichu: req.body.ghichu,
        diachi: diachi1,
      });
      user.giohang = [];
      user.diachi.forEach((i) => {
        if (i.macdinh) {
          i.duocchon = "true";
        } else {
          i.duocchon = "false";
        }
      });
      await Promise.all([await user.save(), await order.save()]);
      res.redirect("/user/lichsudonhang");
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
}

module.exports = new UserController();

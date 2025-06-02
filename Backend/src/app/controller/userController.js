const Goods = require("../models/Good");
const Users = require("../models/User");
const Orders = require("../models/Order");

class UserController {
  thongtin(req, res, next) {
    const message = req.cookies.message || null;
    res.render("thongtin", { user: req.user, message });
  }

  doimatkhau(req, res, next) {
    res.render("doimatkhau", { user: req.user });
  }

  capnhatemail(req, res, next) {
    res.render("capnhatemail", { user: req.user });
  }

  async doiemail(req, res, next) {
    res.cookie("message", "Đổi email thành công!", { maxAge: 1500 });
    await Users.findByIdAndUpdate(req.user._id, {
      email: req.body.email,
    });
    res.redirect("/user/thongtin");
  }

  async doimk(req, res, next) {
    await Users.findByIdAndUpdate(req.user._id, {
      password: req.body.newPassword,
    });
    res.json({ success: true });
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

  lichsudonhang(req, res, next) {
    res.render("lichsudonhang", { user: req.user });
  }

  diachinhanhang(req, res, next) {
    const message = req.cookies.message || null;
    res.render("diachinhanhang", { user: req.user, message });
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
      console.log(req.body.soluong);
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

  async dathang(req, res) {
    try {
      let user = await Users.findById(req.user);
      let sum = 0;
      user.giohang.forEach((i) => (sum += i.giaban * i.soluong));
      let order = new Orders({
        userid: req.user,
        giohang: user.giohang,
        tongtien: sum,
        thanhtoan: "COD",
      });
      await order.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
}

module.exports = new UserController();

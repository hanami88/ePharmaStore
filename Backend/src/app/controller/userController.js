const Goods = require("../models/Good");
const Users = require("../models/User");
class UserController {
  thongtin(req, res, next) {
    res.render("thongtin", { user: req.user });
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
      user.cart.push(good);
      await user.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
  async congdonhang(req, res) {
    try {
      let user = await Users.findById(req.user);
      user.cart[req.body.index].soluong++;
      await user.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
  async trudonhang(req, res) {
    try {
      let user = await Users.findById(req.user);
      user.cart[req.body.index].soluong--;
      await user.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
  async xoadonhang(req, res) {
    try {
      let user = await Users.findById(req.user);
      user.cart.splice(req.body.index, 1);
      await user.save();
    } catch (err) {
      res.status(500).send("Lỗi server");
    }
  }
}

module.exports = new UserController();

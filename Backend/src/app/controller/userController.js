const Goods = require("../models/User");

class UserController {
  thongtin(req, res, next) {
    res.render("thongtin", { user: req.user });
  }
  logout(req, res, next) {
    res.clearCookie("token", { httpOnly: true });
    res.redirect("/");
  }
}

module.exports = new UserController();

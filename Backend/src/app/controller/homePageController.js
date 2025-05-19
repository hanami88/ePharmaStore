const Goods = require("../models/Good");
const Users = require("../models/User");
var jwt = require("jsonwebtoken");

class HomePageController {
  async home(req, res) {
    try {
      let deal1 = await Goods.find({ danhmuc: "Săn Deal" }).lean();
      let deal2 = await Goods.find({
        danhmuc: "Ngàn Deal Hot Tặng Nàng",
      }).lean();
      let deal3 = await Goods.find({
        danhmuc: "Top bán chạy toàn quốc",
      }).lean();
      let deal4 = await Goods.find({ danhmuc: "Thương hiệu Nhật Bản" }).lean();
      res.render("test", {
        deal1,
        deal2,
        deal3,
        deal4,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async khohang(req, res) {
    try {
      let good = await Goods.find({}).lean();
      res.render("khohang", {
        good,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async login(req, res) {
    try {
      let user = await Users.findOne({
        username: req.body.username,
        password: req.body.password,
      }).lean();
      if (user) {
        var token = jwt.sign({ id: user._id }, "1");
        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        if (user.role === "user") {
          res.redirect("/");
        } else {
          res.redirect("admin/add");
        }
      } else {
        res.send("con cac tao ne");
      }
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
}

module.exports = new HomePageController();

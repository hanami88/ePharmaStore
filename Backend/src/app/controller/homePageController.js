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
      const { username, password } = req.body;
      const user = await Users.findOne({ username }).lean();

      if (!user) {
        return res.status(401).json({ error: "Tài khoản không tồn tại" });
      }

      if (user.password !== password) {
        return res.status(401).json({ error: "Mật khẩu sai" });
      }

      const token = jwt.sign({ id: user._id, role: user.role }, "1");
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ success: true, role: user.role });
    } catch (err) {
      res.status(500).json({ error: "Lỗi server. Vui lòng thử lại sau." });
    }
  }
  async dangky(req, res) {
    try {
      const { username, password, repassword } = req.body;
      const user = await Users.findOne({ username }).lean();
      if (user) {
        return res.status(401).json({ error: "Tài khoản đã tồn tại" });
      }
      if (password !== repassword) {
        return res.status(401).json({ error: "Mật khẩu không khớp" });
      }
      const newuser = new Users({
        username: username,
        password: password,
        role: "user",
      });
      newuser.save();
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Lỗi server. Vui lòng thử lại sau." });
    }
  }
}

module.exports = new HomePageController();

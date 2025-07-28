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
      const sortParam = req.query.sort;
      const sortOption =
        sortParam === "asc" ? 1 : sortParam === "desc" ? -1 : null;

      let query = Goods.find({});

      if (sortOption !== null) {
        query = query.sort({ giaban: sortOption });
      }

      const good = await query.lean();

      res.render("khohang", {
        good,
        sortType: sortParam || "none", // truyền vào để hiển thị trạng thái nút
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async timkiemsanpham(req, res) {
    try {
      const { keyword } = req.body;
      const query = {};
      if (keyword && keyword.trim() !== "") {
        query.tensp = { $regex: keyword, $options: "i" };
      }
      let [good] = await Promise.all([Goods.find(query).lean()]);
      res.render("khohang", {
        good,
        filters: { keyword },
      });
    } catch (err) {
      res.send("ERROR");
    }
  }
  async login(req, res) {
    try {
      const { sdt, password } = req.body;
      const user = await Users.findOne({ sdt }).lean();
      if (!user) {
        return res.status(401).json({ error: "Số điện thoại không tồn tại" });
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
      const { sdt, password, repassword } = req.body;
      const user = await Users.findOne({ sdt }).lean();
      if (user) {
        return res.status(401).json({ error: "Số điện thoại đã tồn tại" });
      }
      if (password !== repassword) {
        return res.status(401).json({ error: "Mật khẩu không khớp" });
      }
      const newuser = new Users({
        sdt: sdt,
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

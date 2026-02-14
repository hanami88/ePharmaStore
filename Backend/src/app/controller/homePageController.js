const Goods = require("../models/Good");
const Users = require("../models/User");
var jwt = require("jsonwebtoken");
require("dotenv").config();
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
      if (keyword && typeof keyword === "string" && keyword.trim() !== "") {
        query.$text = { $search: keyword.trim() };
      }
      let goods = await Goods.find(query).lean();
      res.render("khohang", {
        good: goods, // Đổi tên biến cho rõ ràng hơn
        filters: { keyword },
      });
    } catch (err) {
      console.error("Lỗi tìm kiếm sản phẩm:", err);
      res.status(500).send("ERROR");
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
      const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15m",
        },
      );
      const refreshToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "3d",
        },
      );
      res.cookie("accessToken", accessToken, {
        httpOnly: false,
        maxAge: 15 * 60 * 1000,
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: false,
        maxAge: 3 * 24 * 60 * 60 * 1000,
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
      const newUser = new Users({
        sdt: sdt,
        password: password,
        role: "user",
      });
      newUser.save();
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Lỗi server. Vui lòng thử lại sau." });
    }
  }
}

module.exports = new HomePageController();

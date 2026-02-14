const express = require("express");
const router = express.Router();
const UserController = require("../app/controller/userController");
const Users = require("../app/models/User");
var jwt = require("jsonwebtoken");
const { upload } = require("../app/controller/multerController");

const check = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const accessToken = req.cookies.accessToken;
    let decoded = 0;
    if (accessToken) {
      decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    } else {
      if (refreshToken) {
        decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const accessToken = jwt.sign(
          { id: user._id, role: user.role },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15m",
          },
        );
        res.cookie("accessToken", accessToken, {
          httpOnly: false,
          maxAge: 15 * 60 * 1000,
        });
      } else {
        res.redirect("/");
      }
    }
    const user = await Users.findById(decoded.id).lean();
    res.locals.count = user.giohang.length;
    if (!user) {
      res.locals.user = null;
      return next();
    }
    res.locals.user = user;
    req.user = user;
    next();
  } catch (err) {
    res.redirect("/");
  }
};
router.use(check);
router.post("/xoadonhang", UserController.xoadonhang);
router.post("/trudonhang", UserController.trudonhang);
router.post("/congdonhang", UserController.congdonhang);
router.post("/themvaogiohang", UserController.themvaogiohang);
router.get("/logout", UserController.logout);
router.get("/thongtin", UserController.thongtin);
router.get("/doimatkhau", UserController.doimatkhau);
router.post("/doimatkhau", UserController.doimk);
router.post("/kiemtramatkhau", UserController.kiemtramatkhau);
router.get("/diachinhanhang", UserController.diachinhanhang);
router.post("/themdiachi", UserController.themdiachi);
router.post("/xoadiachi", UserController.xoadiachi);
router.get("/chitietlichsudonhang/:id", UserController.chitietlichsudonhang);
router.get(
  "/chitietlichsudonhangdaxacnhan/:id",
  UserController.chitietlichsudonhangdaxacnhan,
);
router.get(
  "/chitietlichsudonhangdahuy/:id",
  UserController.chitietlichsudonhangdahuy,
);
router.get("/lichsudonhang", UserController.lichsudonhang);
router.get("/lichsudonhangdahuy", UserController.lichsudonhangdahuy);
router.get("/lichsudonhangdaxacnhan", UserController.lichsudonhangdaxacnhan);
router.get("/capnhatemail", UserController.capnhatemail);
router.post("/trangdathang", UserController.trangdathang);
router.post("/capnhatemail", UserController.doiemail);
router.post("/dathang", UserController.dathang);
router.post("/muahangdathang", UserController.muahangdathang);
router.get("/giohang", UserController.giohang);
router.post("/huydonhang", UserController.huydonhang);
router.post("/khoiphucdonhang", UserController.khoiphucdonhang);
router.post("/doidiachinhanhang", UserController.doidiachinhanhang);
router.get("/muahangtrangdathang", UserController.muahangtrangdathang);
router.post(
  "/capnhatthongtin",
  upload.single("hinhanh"),
  UserController.capnhatthongtin,
);
module.exports = router;

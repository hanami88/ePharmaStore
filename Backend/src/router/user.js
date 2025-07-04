const express = require("express");
const router = express.Router();
const UserController = require("../app/controller/userController");
const Users = require("../app/models/User");
var jwt = require("jsonwebtoken");
const check = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, "1");
    const user = await Users.findById(decoded.id).lean();
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
router.get("/lichsudonhang", UserController.lichsudonhang);
router.get("/capnhatemail", UserController.capnhatemail);
router.post("/capnhatemail", UserController.doiemail);
router.post("/dathang", UserController.dathang);
module.exports = router;

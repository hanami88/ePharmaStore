const express = require("express");
const router = express.Router();
const AdminController = require("../app/controller/adminController");
const { upload } = require("../app/controller/multerController");
var jwt = require("jsonwebtoken");
const Users = require("../app/models/User");
const check = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    var result = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    const user = await Users.findById(result.id).lean();
    if (result.role != "admin") {
      res.locals.user = null;
      res.redirect("/");
    } else {
      res.locals.user = user;
      req.user = user;
      next();
    }
  } catch (err) {
    res.redirect("/");
  }
};
router.use(check);
router.get("/add", AdminController.home);
router.get("/chamsockhachhang", AdminController.chamsockhachhang);
router.get("/dangxuat", AdminController.dangxuat);
router.get("/quanlydonhang", AdminController.quanlydonhang);
router.post("/add", upload.single("hinhanh"), AdminController.create);
router.get("/quanlysanpham", AdminController.quanlysanpham);
router.get("/trashsanpham", AdminController.trashsanpham);
router.get("/trashdonhang", AdminController.trashdonhang);
router.post("/:id/update", upload.single("hinhanh"), AdminController.update);
router.get("/:id/suasanpham", AdminController.suasanpham);
router.post("/:id/softdeletesanpham", AdminController.softdeletesanpham);
router.post("/:id/softdeletedonhang", AdminController.softdeletedonhang);
router.post("/:id/deletesanpham", AdminController.deletesanpham);
router.post("/:id/deletedonhang", AdminController.deletedonhang);
router.post("/:id/xacnhandonhang", AdminController.xacnhandonhang);
router.get("/:id/restoredonhang", AdminController.restoredonhang);
router.get("/thongke", AdminController.thongke);
router.get("/thongke", AdminController.quanlykhachhang);
router.post("/thongke", AdminController.thongketheothoigian);
router.get("/quanlykhachhang", AdminController.quanlykhachhang);
router.get("/:id/chitietkhachhang", AdminController.chitietkhachhang);
router.get("/:id/restoresanpham", AdminController.restoresanpham);
router.post("/chitietdonhang", AdminController.chitietdonhang);
router.post("/timkiemsanpham", AdminController.timkiemsanpham);
router.post("/timkiemkhachhang", AdminController.timkiemkhachhang);
router.post("/timkiemdonhang", AdminController.timkiemdonhang);
router.get("/:id/trangdoiemail", AdminController.trangdoiemail);
router.get("/:id/trangmatkhau", AdminController.trangmatkhau);
router.post("/:id/doiemail", AdminController.doiemail);
router.post("/:id/doimatkhau", AdminController.doimatkhau);
router.post(
  "/:id/capnhatthongtin",
  upload.single("hinhanh"),
  AdminController.capnhatthongtin,
);
router.get("/apiUser", AdminController.apiUser);
module.exports = router;

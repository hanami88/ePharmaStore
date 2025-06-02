const express = require("express");
const router = express.Router();
const AdminController = require("../app/controller/adminController");
const { upload } = require("../app/controller/multerController");
var jwt = require("jsonwebtoken");
const check = (req, res, next) => {
  try {
    const token = req.cookies.token;
    var result = jwt.verify(token, "1");
    if (result.role != "admin") {
      res.redirect("/");
    } else {
      next();
    }
  } catch (err) {
    res.redirect("/");
  }
};
router.use(check);
router.get("/add", AdminController.home);
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
router.get("/:id/restoredonhang", AdminController.restoredonhang);
router.get("/:id/restoresanpham", AdminController.restoresanpham);

module.exports = router;

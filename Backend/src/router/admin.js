const express = require("express");
const router = express.Router();
const AdminController = require("../app/controller/adminController");
const { upload } = require("../app/controller/multerController");
var jwt = require("jsonwebtoken");
const check = (req, res, next) => {
  try {
    const token = req.cookies.token;
    var result = jwt.verify(token, "1");
    if (result) {
      next();
    }
  } catch (err) {
    res.redirect("/");
  }
};
router.use(check);
router.get("/add", AdminController.home);
router.post("/create", upload.single("hinhanh"), AdminController.create);
router.get("/quanlysanpham", AdminController.quanlysanpham);
router.get("/trash", AdminController.trash);
router.post("/:id/update", upload.single("hinhanh"), AdminController.update);
router.get("/:id/suasanpham", AdminController.suasanpham);
router.post("/:id/softdelete", AdminController.softdelete);
router.post("/:id/delete", AdminController.delete);
router.get("/:id/restore", AdminController.restore);

module.exports = router;

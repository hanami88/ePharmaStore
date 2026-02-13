const express = require("express");
const router = express.Router();
const HomePageController = require("../app/controller/homePageController");
const Users = require("../app/models/User");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const check = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    const user = await Users.findById(decoded.id).lean();
    res.locals.count = user.giohang.length;
    if (decoded.role == "admin") {
      res.redirect("/admin/add");
    }
    if (!user) {
      res.locals.user = null;
      return next();
    }
    res.locals.user = user;
    req.user = user;
    return next();
  } catch (err) {
    res.locals.user = null;
    return next();
  }
};
router.use(check);
router.get("/", HomePageController.home);
router.post("/", HomePageController.login);
router.post("/dangky", HomePageController.dangky);
router.get("/khohang", HomePageController.khohang);
router.post("/timkiemsanpham", HomePageController.timkiemsanpham);
module.exports = router;

const express = require("express");
const router = express.Router();
const HomePageController = require("../app/controller/homePageController");
const Users = require("../app/models/User");
var jwt = require("jsonwebtoken");
const check = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, "1");
    const user = await Users.findById(decoded.id).lean();
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
router.get("/khohang", HomePageController.khohang);

module.exports = router;

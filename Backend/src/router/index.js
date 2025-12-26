const homepageRouter = require("./homepage");
const adminRouter = require("./admin");
const userRouter = require("./user");
function route(app) {
  app.use("/admin", adminRouter);
  app.use("/user", userRouter);
  app.use("/", homepageRouter);
}

module.exports = route;

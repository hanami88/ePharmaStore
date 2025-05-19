const homepageRouter = require("./homepage");
const adminRouter = require("./admin");
const userRouter = require("./user");
function route(app) {
  app.use("/admin", adminRouter);
  app.use("/", homepageRouter);
  app.use("/user", userRouter);
}

module.exports = route;

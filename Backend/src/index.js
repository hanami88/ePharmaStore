const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const router = require("./router");
app.use(express.static(path.join(__dirname, "public")));
const db = require("./config/db");
const multer = require("multer");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
// app.use(morgan("combined"));
db.connect();
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      formatNumber: function (value) {
        return Number(value).toLocaleString("vi-VN");
      },
      equal: (a, b) => a === b,
      sum: (a, b) => a + b,
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
router(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

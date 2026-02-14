const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const router = require("./router");
app.use(express.static(path.join(__dirname, "public")));
const db = require("./config/db");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const dayjs = require("dayjs");
const funcwss = require("./app/Socket/Websocket");
require("dotenv").config();
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
      lonhon: (a, b) => a > b,
      equal: (a, b) => a === b,
      nequal: (a, b) => a !== b,
      length: (arr) => {
        if (!arr) return 0;
        return arr.length;
      },
      sum: (a, b) => a + b,
      nhan: (a, b) => a * b,
      chia: (a, b) => a / b,
      totalGiaban: (cart) =>
        Array.isArray(cart)
          ? cart.reduce((sum, item) => sum + item.giaban * item.soluong, 0)
          : 0,
      totalGiagoc: (cart) =>
        Array.isArray(cart)
          ? cart.reduce((sum, item) => sum + item.giagoc * item.soluong, 0)
          : 0,
      minus: (a, b) => a - b,
      formatDate: (datetime) => {
        const dayjs = require("dayjs");
        return dayjs(datetime).format("HH:mm DD/MM/YYYY");
      },
      formatTime: (datetime) => {
        const dayjs = require("dayjs");
        return dayjs(datetime).format("HH:mm");
      },
      formatDateNhat: (datetime) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ja-JP");
      },
      equalObjectId: function (a, b) {
        if (!a || !b) return false;
        return a.toString() === b.toString();
      },
    },
  }),
);
//Socket
funcwss(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
router(app);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

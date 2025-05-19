const header_login = document.querySelector(".header-line2__login");
const trangdn = document.querySelector(".trangdangnhap");
const tatdn = document.querySelector(".x");
const html = document.documentElement;
header_login.addEventListener("click", () => {
  if (!odangnhap.classList.contains("active")) {
    trangdn.classList.add("active");
    html.style.overflow = "hidden";
  }
});
tatdn.addEventListener("click", () => {
  trangdn.classList.remove("active");
  html.style.overflow = "visible";
});
const QR = document.querySelector(".QR");
const thongtintaiud = document.querySelector(".thongtintaiud");
QR.addEventListener("mouseover", () => {
  thongtintaiud.classList.add("active");
});
QR.addEventListener("mouseout", () => {
  thongtintaiud.classList.remove("active");
});
const danhmuc_box = document.querySelectorAll(".danhmuc-box");
const boxdanhmuc = document.querySelectorAll(".boxdanhmuc");
danhmuc_box.forEach((box, index) => {
  box.addEventListener("click", () => {
    boxdanhmuc.forEach((tmp) => {
      tmp.classList.remove("active");
    });
    boxdanhmuc[index].classList.add("active");
  });
});
const dmdt_c = document.querySelector(".danhmucdathang-container");
const dmdt = document.querySelector(".danhmucdathang");
dmdt_c.addEventListener("mouseleave", () => {
  dmdt.classList.remove("active");
  mt.style.transform = "rotate(0deg)";
  danhmuc_box.forEach((box) => {
    box.classList.remove("active");
  });
});
const choice = document.querySelector(".choice");
const mt = document.querySelector(".fa-chevron-right");
choice.addEventListener("click", () => {
  if (dmdt.classList.contains("active")) {
    dmdt.classList.remove("active");
    mt.style.transform = "rotate(0deg)";
    danhmuc_box.forEach((box) => {
      box.classList.remove("active");
    });
  } else {
    dmdt.classList.add("active");
    mt.style.transform = "rotate(90deg)";
  }
});
const tranggiohang = document.querySelector(".giohang");
const giohang = document.querySelector(".fa-cart-plus");
const nuttatgiohang = document.querySelector(".fa-rectangle-xmark");
giohang.addEventListener("click", () => {
  tranggiohang.classList.add("active");
  html.style.overflow = "hidden";
});
nuttatgiohang.addEventListener("click", () => {
  tranggiohang.classList.remove("active");
  html.style.overflow = "visible";
});
const bangchon = document.querySelector(".bangchon");
const bangchonkhoantrang = document.querySelector(".bangchon-khoangtrang");
var odangnhap = document.querySelector(".bocline2");

odangnhap.addEventListener("mouseover", function (e) {
  if (odangnhap.classList.contains("active")) {
    bangchonkhoantrang.classList.add("active");
    bangchon.classList.add("active");
  }
});
odangnhap.addEventListener("mouseout", function (e) {
  if (odangnhap.classList.contains("active")) {
    bangchonkhoantrang.classList.remove("active");
    bangchon.classList.remove("active");
  }
});

const btn_dangxuat = document.querySelector(".btn-dangxuat");
btn_dangxuat.addEventListener("click", async function () {
  const res = await fetch("/user/logout", {
    method: "GET",
    credentials: "include",
  });
  if (res.redirected) {
    window.location.href = res.url;
  }
});

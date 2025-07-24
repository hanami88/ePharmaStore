const header_login = document.querySelector(".header-line2__login");
const trangdn = document.querySelector(".trangdangnhap");
const tatdn = document.querySelector(".x");
const tatdky = document.querySelector(".x1");
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
tatdky.addEventListener("click", () => {
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
const giohang = document.querySelector(".fa-cart-plus");
giohang.addEventListener("click", () => {
  window.location.href = "/user/giohang";
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

const btn_dangnhap = document.querySelector(".btn-dangnhap");
const btn_dangky = document.querySelector(".btn-dangky");
const tranglogin = document.querySelector(".trang-login");
const trangdangky = document.querySelector(".trang-login.dky");
btn_dangnhap.addEventListener("click", function () {
  trangdangky.style.display = "none";
  tranglogin.style.display = "flex";
});
btn_dangky.addEventListener("click", function () {
  trangdangky.style.display = "flex";
  tranglogin.style.display = "none";
});
const form = document.querySelector(".trang-login-form");
const errorMsg = document.querySelector(".trang-login-error");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const res = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (res.ok && data.success) {
    // Đăng nhập thành công → chuyển hướng
    if (data.role === "user") {
      window.location.href = "/";
    } else {
      window.location.href = "/admin/add";
    }
  } else {
    // Lỗi → hiện thông báo
    errorMsg.textContent = data.error || "Đăng nhập thất bại";
  }
});
const form_dky = document.querySelector(".trang-dky-form");
const errordky = document.querySelector(".trang-dky-error");
const tbdky = document.querySelector(".dangkythanhcong");
form_dky.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username1").value;
  const password = document.getElementById("password1").value;
  const repassword = document.getElementById("repassword").value;
  const res = await fetch("/dangky", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, repassword }),
  });
  const data = await res.json();
  if (res.ok && data.success) {
    trangdangky.style.display = "none";
    tranglogin.style.display = "flex";
    tbdky.classList.add("active");
    setTimeout(() => {
      tbdky.classList.remove("active");
    }, 1000);
  } else {
    errordky.textContent = data.error || "Đăng nhập thất bại";
  }
});

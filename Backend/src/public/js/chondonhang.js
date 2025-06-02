const themsanpham = document.querySelectorAll(".sandeal-box-buy");
const tatmuahang = document.querySelector(".fa-circle-xmark");
const trumuahang = document.querySelector(".trumuahang");
const congmuahang = document.querySelector(".congmuahang");
const soluongmuahang = document.querySelector(".soluongmuahang");
const themvaogio = document.querySelector(".themvaogio");
const muahang = document.querySelector(".muahang");
const tamtinh = document.querySelector(".giohang-tongtien__tamtinh-tt");
const giamgiatong = document.querySelector(".giamgiatong");
const hienthiso = document.querySelector(".hienthiso");
const sanphamall = document.querySelector(".sanpham-all");
const tongtientt = document.querySelector(".giohang-tongtien__tongtien-tt");
trumuahang.addEventListener("click", () => {
  if (soluongmuahang.textContent > 1) {
    soluongmuahang.textContent = Number(soluongmuahang.textContent) - 1;
  }
});
congmuahang.addEventListener("click", () => {
  soluongmuahang.textContent = Number(soluongmuahang.textContent) + 1;
});
tatmuahang.addEventListener("click", () => {
  muahang.classList.remove("active");
  html.style.overflow = "scroll";
  soluongmuahang.textContent = "1";
});
const khungmuahang = document.querySelector(".muahang-container");
themsanpham.forEach((i) => {
  i.addEventListener("click", (e) => {
    muahang.classList.add("active");
    html.style.overflow = "hidden";
    let buyboxtmp = e.target.closest(".buy-box");
    khungmuahang.children[0].src = buyboxtmp.querySelector("img").src;
    khungmuahang.children[1].children[1].textContent = buyboxtmp.querySelector(
      ".sandeal-box-tieude"
    ).textContent;
    khungmuahang.children[1].children[2].innerHTML = buyboxtmp.querySelector(
      ".sandeal-box-giamgia"
    ).innerHTML;
    khungmuahang.children[1].children[3].textContent =
      buyboxtmp.querySelector(".sandeal-box-gia").textContent;
    khungmuahang.children[1].children[8].children[2].value =
      buyboxtmp.querySelector("input").value;
  });
});
const tongthanhtien = document.querySelector(".giohang-tongtien__tongtien-tt");
function convertToNumber(str) {
  return Number(str.replace(/\./g, ""));
}
function ReverseconvertToNumber(str) {
  return Number(str.replace("", /\./g));
}
const minus = document.querySelectorAll(".fa-minus");
const plus = document.querySelectorAll(".fa-plus");
const trash = document.querySelectorAll(".fa-trash");
const xoasp = document.querySelector(".xoasp");
const quaylai = document.querySelector(".thongbao-quaylai");
const tieptuc = document.querySelector(".thongbao-tieptuc");
function thaotac(dau) {
  thanhtien.textContent =
    (
      convertToNumber(thanhtien.textContent.slice(0, -2)) +
      dau * convertToNumber(dongia.textContent.slice(0, -2))
    ).toLocaleString("vi-VN") + " ₫";
  tamtinh.textContent =
    (
      convertToNumber(tamtinh.textContent.slice(0, -2)) +
      dau * convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
    ).toLocaleString("vi-VN") + " ₫";
  tongtientt.textContent =
    (
      convertToNumber(tongtientt.textContent.slice(0, -2)) +
      dau * convertToNumber(dongia.textContent.slice(0, -2))
    ).toLocaleString("vi-VN") + " ₫";
  giamgiatong.textContent =
    (
      convertToNumber(tamtinh.textContent.slice(0, -2)) -
      convertToNumber(tongtientt.textContent.slice(0, -2))
    ).toLocaleString("vi-VN") + " ₫";
}
document.addEventListener("DOMContentLoaded", function () {});
plus.forEach(function (i, ind) {
  i.addEventListener("click", function (e) {
    let closest = e.target.closest(".box-sanphamthem");
    let soluong = Number(closest.querySelector(".slgiohang").textContent);
    closest.querySelector(".slgiohang").textContent = soluong + 1;
    let thanhtien = closest.querySelector(".thanhtien").children[0];
    let dongia = closest.querySelector(".dg");
    let giamgiadiv = closest.querySelector(".dongia").children[0];
    thanhtien.textContent =
      (
        convertToNumber(thanhtien.textContent.slice(0, -2)) +
        convertToNumber(dongia.textContent.slice(0, -2))
      ).toLocaleString("vi-VN") + " ₫";
    tamtinh.textContent =
      (
        convertToNumber(tamtinh.textContent.slice(0, -2)) +
        convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
      ).toLocaleString("vi-VN") + " ₫";
    tongtientt.textContent =
      (
        convertToNumber(tongtientt.textContent.slice(0, -2)) +
        convertToNumber(dongia.textContent.slice(0, -2))
      ).toLocaleString("vi-VN") + " ₫";
    giamgiatong.textContent =
      (
        convertToNumber(tamtinh.textContent.slice(0, -2)) -
        convertToNumber(tongtientt.textContent.slice(0, -2))
      ).toLocaleString("vi-VN") + " ₫";
    fetch("/user/congdonhang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index: ind }),
    });
  });
});
minus.forEach(function (i, ind) {
  i.addEventListener("click", function (e) {
    let closest = e.target.closest(".box-sanphamthem");
    let soluong = Number(closest.querySelector(".slgiohang").textContent);
    if (soluong > 1) {
      closest.querySelector(".slgiohang").textContent = soluong - 1;
      let thanhtien = closest.querySelector(".thanhtien").children[0];
      let dongia = closest.querySelector(".dg");
      let giamgiadiv = closest.querySelector(".dongia").children[0];
      thanhtien.textContent =
        (
          convertToNumber(thanhtien.textContent.slice(0, -2)) -
          convertToNumber(dongia.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      tamtinh.textContent =
        (
          convertToNumber(tamtinh.textContent.slice(0, -2)) -
          convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
        ).toLocaleString("vi-VN") + " ₫";
      tongtientt.textContent =
        (
          convertToNumber(tongtientt.textContent.slice(0, -2)) -
          convertToNumber(dongia.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      giamgiatong.textContent =
        (
          convertToNumber(tamtinh.textContent.slice(0, -2)) -
          convertToNumber(tongtientt.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      fetch("/user/trudonhang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index: ind }),
      });
    }
  });
});
trash.forEach(function (i, ind) {
  i.addEventListener("click", function (e) {
    let box = e.target.closest(".sanpham-all-box");
    let closest = e.target.closest(".box-sanphamthem");
    let soluong = Number(closest.querySelector(".slgiohang").textContent);
    let dongia = closest.querySelector(".dg");
    let giamgiadiv = closest.querySelector(".dongia").children[0];
    xoasp.classList.add("active");
    quaylai.addEventListener(
      "click",
      () => {
        xoasp.classList.remove("active");
      },
      { once: true }
    );
    tieptuc.addEventListener(
      "click",
      function () {
        tamtinh.textContent =
          (
            convertToNumber(tamtinh.textContent.slice(0, -2)) -
            convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) * soluong
          ).toLocaleString("vi-VN") + " ₫";
        console.log("tam tinh : ", tamtinh.textContent);
        console.log("so luong : ", soluong);
        console.log("giamgia : ", tamtinh.textContent);
        tongtientt.textContent =
          (
            convertToNumber(tongtientt.textContent.slice(0, -2)) -
            convertToNumber(dongia.textContent.slice(0, -2)) * soluong
          ).toLocaleString("vi-VN") + " ₫";
        giamgiatong.textContent =
          (
            convertToNumber(tamtinh.textContent.slice(0, -2)) -
            convertToNumber(tongtientt.textContent.slice(0, -2))
          ).toLocaleString("vi-VN") + " ₫";
        box.remove();
        fetch("/user/xoadonhang", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ index: ind }),
        });
        xoasp.classList.remove("active");
      },
      { once: true }
    );
  });
});

const datthanhcong = document.querySelector(".datthanhcong");
themvaogio.addEventListener("click", (e) => {
  let soluong = document.querySelector(".soluongmuahang").textContent;
  console.log(soluong);
  muahang.classList.remove("active");
  html.style.overflow = "scroll";
  datthanhcong.classList.add("active");
  setTimeout(() => {
    datthanhcong.classList.remove("active");
  }, 1500);
  const boxlayid1 = document.querySelector(".boxlayid1");
  fetch("/user/themvaogiohang", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: boxlayid1.value, soluong: soluong }),
  });
});
const datdonhangthanhcong = document.querySelector(".datdonhangthanhcong");
const xacnhandathang = document.querySelector(".xacnhandathang");
const quaylaidathang = document.querySelector(".thongbao-quaylaidathang");
const tieptucdathang = document.querySelector(".thongbao-tieptucdathang");
const dathang = document.querySelector(".giohang-tongtien__btn");
dathang.addEventListener("click", function () {
  xacnhandathang.classList.add("active");
  tieptucdathang.addEventListener("click", function () {
    fetch("/user/dathang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    tranggiohang.classList.remove("active");
    xacnhandathang.classList.remove("active");
    datdonhangthanhcong.classList.add("active");
    setTimeout(() => {
      datdonhangthanhcong.classList.remove("active");
    }, 1500);
  });
  quaylaidathang.addEventListener("click", function () {
    xacnhandathang.classList.remove("active");
  });
});

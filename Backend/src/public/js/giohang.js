const minus = document.querySelectorAll(".fa-minus");
const plus = document.querySelectorAll(".fa-plus");
const trash = document.querySelectorAll(".fa-trash");
const xoasp = document.querySelector(".xoasp");
const quaylai = document.querySelector(".thongbao-quaylai");
const tieptuc = document.querySelector(".thongbao-tieptuc");
const tamtinh = document.querySelector(".giohang-tongtien__tamtinh-tt");
const tongtientt = document.querySelector(".giohang-tongtien__tongtien-tt");
const giamgiatong = document.querySelector(".giamgiatong");
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
    html.style.overflow = "hidden";
    quaylai.addEventListener(
      "click",
      () => {
        xoasp.classList.remove("active");
        html.style.overflow = "visible";
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
        if (Number(hienthiso_so.textContent) > 1) {
          hienthiso_so.textContent = Number(hienthiso_so.textContent) - 1;
        } else {
          hienthiso.classList.remove("active");
        }
      },
      { once: true }
    );
  });
});
const tongthanhtien = document.querySelector(".giohang-tongtien__tongtien-tt");
function convertToNumber(str) {
  return Number(str.replace(/\./g, ""));
}
function ReverseconvertToNumber(str) {
  return Number(str.replace("", /\./g));
}
const dathang = document.querySelector(".giohang-tongtien__btn");
const formdathang = document.querySelector(".formdathang");
dathang.addEventListener("click", function () {
  formdathang.submit();
});

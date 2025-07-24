const doidiachi = document.querySelector(".doidiachi");
const thaydoi = document.querySelector(".thaydoi");
const modori = document.querySelector(".modori");
const apuru = document.querySelector(".apuru");
const themdiachi = document.querySelector(".btnthemdiachi");
const diachimoi = document.querySelector(".container-themdiachi");
const quaylai = document.querySelector(".btn-diachi-quaylai");
const formthaydoi = document.querySelector(".chuadiachi-hienthi");
thaydoi.addEventListener("click", function () {
  doidiachi.classList.add("active");
  html.style.overflow = "hidden";
  themdiachi.addEventListener("click", function () {
    diachimoi.classList.add("active");
    quaylai.addEventListener("click", function () {
      diachimoi.classList.remove("active");
    });
  });
  modori.addEventListener("click", function () {
    doidiachi.classList.remove("active");
    html.style.overflow = "visible";
  });
});
const btndathang = document.querySelector(".thanhtoan-tongtien__btn");
const checkdk = document.querySelector(".checkdieukiendathang");
checkdk.addEventListener("change", function () {
  btndathang.classList.toggle("active");
});
apuru.addEventListener("click", function () {
  formthaydoi.submit();
});
let ghichu = document.querySelector("#ghichu");
btndathang.addEventListener("click", function () {
  fetch("/user/dathang", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ghichu: ghichu.value }),
  });
  window.location.href = "/user/lichsudonhang";
});

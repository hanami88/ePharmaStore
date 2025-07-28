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
const ghichu = document.querySelector("#ghichu");
const isGioHang = btndathang.dataset.giohang === "true";
const checkdk = document.querySelector(".checkdieukiendathang");
checkdk.addEventListener("change", function () {
  btndathang.classList.toggle("active");
});
apuru.addEventListener("click", function () {
  formthaydoi.submit();
});
btndathang.addEventListener("click", async function () {
  const ghichuText = ghichu ? ghichu.value : "";
  if (isGioHang) {
    await fetch("/user/dathang", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ghichu: ghichuText }),
    });
  } else {
    const id = document.querySelector(".boxlayid")?.value;
    const soluong =
      Number(
        document
          .querySelector(".soluong-thanhtoan")
          ?.textContent.replace("x", "")
      ) || 1;
    await fetch("/user/muahangdathang", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, soluong, ghichu: ghichuText }),
    });
  }

  window.location.href = "/user/lichsudonhang";
});

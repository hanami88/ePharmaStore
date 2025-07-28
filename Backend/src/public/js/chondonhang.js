const themsanpham = document.querySelectorAll(".sandeal-box-buy");
const tatmuahang = document.querySelector(".fa-circle-xmark");
const trumuahang = document.querySelector(".trumuahang");
const congmuahang = document.querySelector(".congmuahang");
const soluongmuahang = document.querySelector(".soluongmuahang");
const themvaogio = document.querySelector(".themvaogio");
const muahang = document.querySelector(".muahang");
const hienthiso = document.querySelector(".hienthiso");
const hienthiso_so = document.querySelector(".hienthiso-so");
if (Number(hienthiso_so.textContent) > 0) {
  hienthiso.classList.add("active");
} else {
  hienthiso.classList.remove("active");
}
const sanphamall = document.querySelector(".sanpham-all");
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
    const id = e.target.nextElementSibling.value;
    const btnmuahang = document.querySelector(".btnmuahang");
    muahang.classList.add("active");
    const soluong = document.querySelector(".soluongmuahang");
    btnmuahang.addEventListener("click", function () {
      const url = `/user/muahangtrangdathang?id=${id}&soluong=${soluong.textContent}`;
      window.location.href = url;
    });
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
//---------
const datthanhcong = document.querySelector(".datthanhcong");
themvaogio.addEventListener("click", (e) => {
  let soluong = document.querySelector(".soluongmuahang").textContent;
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
  if (Number(hienthiso_so.textContent) == 0) {
    hienthiso.classList.add("active");
  }
  hienthiso_so.textContent = Number(hienthiso_so.textContent) + 1;
});

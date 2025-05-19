const themsanpham = document.querySelectorAll(".sandeal-box-buy");
const tatmuahang = document.querySelector(".fa-circle-xmark");
const trumuahang = document.querySelector(".trumuahang");
const congmuahang = document.querySelector(".congmuahang");
const soluongmuahang = document.querySelector(".soluongmuahang");
const themvaogio = document.querySelector(".themvaogio");
const muahang = document.querySelector(".muahang");

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
  });
});

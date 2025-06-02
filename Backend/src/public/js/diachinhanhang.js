const themdiachi = document.querySelector(".btnthemdiachi");
const container_themdiachi = document.querySelector(".container-themdiachi");
const quaylai = document.querySelector(".btn-diachi-quaylai");
const btnphuthemdiachi = document.querySelector(".themdiachiphu");
const formdiachi = document.querySelector(".formdiachi");
const btnluulai = document.querySelector(".luudiachi");
themdiachi.addEventListener("click", function () {
  container_themdiachi.classList.add("active");
  html.style.overflow = "hidden";
});
quaylai.addEventListener("click", function () {
  container_themdiachi.classList.remove("active");
  html.style.overflow = "visible";
});
if (btnphuthemdiachi) {
  btnphuthemdiachi.addEventListener("click", function () {
    container_themdiachi.classList.add("active");
    html.style.overflow = "hidden";
  });
}
btnluulai.addEventListener("click", function () {
  formdiachi.submit();
  container_themdiachi.classList.remove("active");
  html.style.overflow = "visible";
});

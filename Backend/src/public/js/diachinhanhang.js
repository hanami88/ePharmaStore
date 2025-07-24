document.addEventListener("DOMContentLoaded", function () {
  const themdiachi = document.querySelector(".btnthemdiachi");
  const container_themdiachi = document.querySelector(".container-themdiachi");
  const quaylai = document.querySelector(".btn-diachi-quaylai");
  const btnphuthemdiachi = document.querySelector(".themdiachiphu");
  const formdiachi = document.querySelector(".formdiachi");
  const btnluulai = document.querySelector(".luudiachi");
  const tbxoasp = document.querySelector(".xoadc");
  const trash1 = document.querySelectorAll(".trashdc");
  const tbquaylai = document.querySelector(".qlai");
  const tbtieptuc = document.querySelector(".tt");
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
  let indexToDelete = null;
  let elementToDelete = null;

  trash1.forEach(function (i) {
    i.addEventListener("click", function (e) {
      tbxoasp.classList.add("active");
      console.log(tbxoasp);
      indexToDelete = i.nextElementSibling.value;
      elementToDelete = i.closest(".chuadiachi");
    });
  });
  tbquaylai.addEventListener("click", function () {
    tbxoasp.classList.remove("active");
  });
  tbtieptuc.addEventListener("click", function () {
    if (elementToDelete !== null && indexToDelete !== null) {
      elementToDelete.remove();
      fetch("/user/xoadiachi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index: indexToDelete }),
      });
    }
    indexToDelete = null;
    elementToDelete = null;
    tbxoasp.classList.remove("active");
  });
});

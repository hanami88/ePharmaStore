const xoasp = document.querySelector(".xoasp");
const btnxoa = document.querySelectorAll(".btn-sm");
const btn_quaylai = document.querySelector(".thongbao-quaylai");
const btn_tieptuc = document.querySelector(".thongbao-tieptuc");
const form_xoa = document.querySelector(".formxoa");
btnxoa.forEach((element) => {
  element.addEventListener("click", function (event) {
    xoasp.classList.add("active");
    btn_tieptuc.addEventListener("click", function (e) {
      let id = element.getAttribute("data-id");
      form_xoa.action = "/admin/" + id + "/delete";
      form_xoa.submit();
    });
  });
});

btn_quaylai.addEventListener("click", function (e) {
  xoasp.classList.remove("active");
  btn_tieptuc.removeEventListener("click");
});

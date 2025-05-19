const imgAD = document.querySelector(".ad1-first-p");
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
const chamdiv = document.querySelectorAll(".cham-trang");
let index = 1;
let iTVAD;
function activeAD(index1) {
  chamdiv[index - 1].classList.remove("active");
  index += index1;
  if (index < 1) {
    index = 9;
    imgAD.style.right = 900 + "%";
    chamdiv[index - 1].classList.add("active");
    return;
  } else if (index > 9) {
    index = 1;
    imgAD.style.right = 100 + "%";
    chamdiv[index - 1].classList.add("active");
    return;
  }
  imgAD.style.right = index * 100 + "%";
  chamdiv[index - 1].classList.add("active");
}
function resetInterVal() {
  clearInterval(iTVAD);
  iTVAD = setInterval(() => {
    activeAD(1);
  }, 5000);
}
resetInterVal();
btnleft.addEventListener("click", () => {
  activeAD(-1);
  resetInterVal();
});
btnright.addEventListener("click", () => {
  activeAD(1);
  resetInterVal();
});

const sanDeal_left = document.querySelector(".sandeal-left");
const sanDeal_right = document.querySelector(".sandeal-right");
const sanDeal_thanhchon = document.querySelector(".sandeal-menu__thanhchon");
let index_sanDeal = 0;
function sanDeal(index) {
  index_sanDeal += index;
  if (index_sanDeal <= 0) {
    sanDeal_left.style.opacity = 0;
    sanDeal_left.style.visibility = "hidden";
    sanDeal_thanhchon.style.transform =
      "translateX(" + -index_sanDeal * 40.3 + "%)";
  } else if (index_sanDeal >= 2) {
    sanDeal_right.style.opacity = 0;
    sanDeal_right.style.visibility = "hidden";
    sanDeal_thanhchon.style.transform =
      "translateX(" + -index_sanDeal * 40.3 + "%)";
  } else {
    sanDeal_right.style.opacity = 1;
    sanDeal_right.style.visibility = "visible";
    sanDeal_left.style.opacity = 1;
    sanDeal_left.style.visibility = "visible";
    sanDeal_thanhchon.style.transform =
      "translateX(" + -index_sanDeal * 40.3 + "%)";
  }
}
sanDeal(0);
sanDeal_left.addEventListener("click", () => {
  sanDeal(-1);
});
sanDeal_right.addEventListener("click", () => {
  sanDeal(1);
});

let time = document.querySelectorAll(".time");
time[0].textContent = "12";
time[1].textContent = "00";
time[2].textContent = "00";
let gio = 12,
  phut = 0,
  giay = 0;
function timeF() {
  if (giay === 0) {
    giay = 59;
    if (phut === 0) {
      phut = 59;
      if (gio === 0) {
        clearInterval(time_out);
      } else {
        gio--;
      }
    } else {
      phut--;
    }
  } else {
    giay--;
  }
  time[0].textContent = gio.toString().padStart(2, "0");
  time[1].textContent = phut.toString().padStart(2, "0");
  time[2].textContent = giay.toString().padStart(2, "0");
}

var time_out = setInterval(timeF, 1000);
const hotDeal_left = document.querySelectorAll(".hotdeal-left");
const hotDeal_right = document.querySelectorAll(".hotdeal-right");
const hotDeal_thanhchon = document.querySelectorAll(".hotdeal-thanhchon");
let index_hotDeal = [0, 0, 0];
function hotDeal(index, n) {
  index_hotDeal[n] += index;
  if (index_hotDeal[n] <= 0) {
    hotDeal_left[n].style.opacity = 0;
    hotDeal_left[n].style.visibility = "hidden";
    hotDeal_thanhchon[n].style.transform =
      "translateX(" + -index_hotDeal[n] * 40.3 + "%)";
  } else if (index_hotDeal[n] >= 2) {
    hotDeal_right[n].style.opacity = 0;
    hotDeal_right[n].style.visibility = "hidden";
    hotDeal_thanhchon[n].style.transform =
      "translateX(" + -index_hotDeal[n] * 40.3 + "%)";
  } else {
    hotDeal_right[n].style.opacity = 1;
    hotDeal_right[n].style.visibility = "visible";
    hotDeal_left[n].style.opacity = 1;
    hotDeal_left[n].style.visibility = "visible";
    hotDeal_thanhchon[n].style.transform =
      "translateX(" + -index_hotDeal[n] * 40.3 + "%)";
  }
}
for (let i = 0; i < hotDeal_thanhchon.length; i++) {
  hotDeal(0, i);
  hotDeal_left[i].addEventListener("click", () => {
    hotDeal(-1, i);
  });
  hotDeal_right[i].addEventListener("click", () => {
    hotDeal(1, i);
  });
}

const header_login = document.querySelector(".header-line2__login");
const trangdn = document.querySelector(".trangdangnhap");
const tatdn = document.querySelector(".x");
const html = document.documentElement;
header_login.addEventListener("click", () => {
  trangdn.classList.add("active");
  html.style.overflow = "hidden";
});
tatdn.addEventListener("click", () => {
  trangdn.classList.remove("active");
  html.style.overflow = "visible";
});

const tranggiohang = document.querySelector(".giohang");
const giohang = document.querySelector(".fa-cart-plus");
const nuttatgiohang = document.querySelector(".fa-rectangle-xmark");
giohang.addEventListener("click", () => {
  tranggiohang.classList.add("active");
  html.style.overflow = "hidden";
});
nuttatgiohang.addEventListener("click", () => {
  tranggiohang.classList.remove("active");
  html.style.overflow = "visible";
});
function convertToNumber(str) {
  return Number(str.replace(/\./g, ""));
}
function ReverseconvertToNumber(str) {
  return Number(str.replace("", /\./g));
}
const themsanpham = document.querySelectorAll(".sandeal-box-buy");
const sanphamall = document.querySelector(".sanpham-all");
const xoasp = document.querySelector(".xoasp");
const quaylai = document.querySelector(".thongbao-quaylai");
const tieptuc = document.querySelector(".thongbao-tieptuc");
const tamtinh = document.querySelector(".giohang-tongtien__tamtinh-tt");
const giamgiatong = document.querySelector(".giamgiatong");
const tongthanhtien = document.querySelector(".giohang-tongtien__tongtien-tt");
const hienthiso = document.querySelector(".hienthiso");

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
const datthanhcong = document.querySelector(".datthanhcong");
themvaogio.addEventListener("click", (e) => {
  let sanpham_all_box = document.createElement("div");
  sanpham_all_box.classList.add("sanpham-all-box");
  let gachchanto = document.createElement("div");
  gachchanto.classList.add("gachchan-to");
  let sanphamthem = document.createElement("div");
  sanphamthem.classList.add("box-sanphamthem");
  let img_giohang = document.createElement("img");
  img_giohang.classList.add("box-sanphamthem-img");
  let spthemmota = document.createElement("div");
  spthemmota.classList.add("box-sanphamthem-mota");
  let dongia = document.createElement("div");
  dongia.classList.add("dongia");
  let soluong = document.createElement("div");
  let minus = document.createElement("i");
  let plus = document.createElement("i");
  let thanhtiendiv = document.createElement("div");
  let giamgiadiv = document.createElement("div");
  minus.classList.add("fa-solid", "fa-minus");
  let spansoluong = document.createElement("div");
  minus.addEventListener("click", (a) => {
    if (minus.nextElementSibling.textContent !== "1") {
      let closest = a.target.closest(".box-sanphamthem");
      let i = closest.querySelector(".keydiv").textContent;
      minus.nextElementSibling.textContent =
        Number(minus.nextElementSibling.textContent) - 1;
      let cart = JSON.parse(sessionStorage.getItem(i));
      cart.soluong = Number(cart.soluong) - 1;
      sessionStorage.setItem(i, JSON.stringify(cart));
      let div = document.createElement("div");
      let dongiatmp = dongia.querySelector(".dg");
      let keydiv = document.createElement("div");
      keydiv.classList.add("keydiv");
      keydiv.textContent = i;
      div.textContent =
        (
          convertToNumber(thanhtien.textContent.slice(0, -2)) -
          convertToNumber(dongiatmp.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      thanhtiendiv.textContent = div.textContent;
      thanhtien.textContent = "";
      thanhtien.append(div, trash, keydiv);
      tamtinh.textContent =
        (
          convertToNumber(tamtinh.textContent.slice(0, -2)) -
          convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
        ).toLocaleString("vi-VN") + " ₫";
      tongthanhtien.textContent =
        (
          convertToNumber(tongthanhtien.textContent.slice(0, -2)) -
          convertToNumber(donggiadiv.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      giamgiatong.textContent =
        (
          convertToNumber(giamgiatong.textContent.slice(0, -2)) -
          (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
            convertToNumber(
              dongia.querySelector(".dg").textContent.slice(0, -2)
            ))
        ).toLocaleString("vi-VN") + " ₫";
    }
  });
  plus.classList.add("fa-solid", "fa-plus");
  plus.addEventListener("click", (a) => {
    let closest = a.target.closest(".box-sanphamthem");
    let i = closest.querySelector(".keydiv").textContent;
    plus.previousElementSibling.textContent =
      Number(plus.previousElementSibling.textContent) + 1;
    let cart = JSON.parse(sessionStorage.getItem(i));
    cart.soluong = Number(cart.soluong) + 1;
    sessionStorage.setItem(i, JSON.stringify(cart));
    let div = document.createElement("div");
    let dongiatmp = dongia.querySelector(".dg");
    let keydiv = document.createElement("div");
    keydiv.classList.add("keydiv");
    keydiv.textContent = i;
    div.textContent =
      (
        convertToNumber(thanhtien.textContent.slice(0, -2)) +
        convertToNumber(dongiatmp.textContent.slice(0, -2))
      ).toLocaleString("vi-VN") + " ₫";
    thanhtiendiv.textContent = div.textContent;
    thanhtien.textContent = "";
    thanhtien.append(div, trash, keydiv);
    tamtinh.textContent =
      (
        convertToNumber(tamtinh.textContent.slice(0, -2)) +
        convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
      ).toLocaleString("vi-VN") + " ₫";
    tongthanhtien.textContent =
      (
        convertToNumber(tongthanhtien.textContent.slice(0, -2)) +
        convertToNumber(donggiadiv.textContent.slice(0, -2))
      ).toLocaleString("vi-VN") + " ₫";
    giamgiatong.textContent =
      (
        convertToNumber(giamgiatong.textContent.slice(0, -2)) +
        (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
          convertToNumber(dongia.querySelector(".dg").textContent.slice(0, -2)))
      ).toLocaleString("vi-VN") + " ₫";
  });
  soluong.classList.add("soluong");
  let thanhtien = document.createElement("div");
  thanhtien.classList.add("thanhtien");
  let trash = document.createElement("i");
  trash.classList.add("fa-solid", "fa-trash");
  let muahang = e.target.closest(".muahang");
  img_giohang.src = muahang.querySelector("img").src;
  spthemmota.innerHTML = muahang.querySelector(".muahang-tieude").innerHTML;
  giamgiadiv.innerHTML = muahang.querySelector(".muahang-giamgia").innerHTML;
  let donggiadiv = document.createElement("div");
  donggiadiv.classList.add("dg");
  donggiadiv.innerHTML = muahang.querySelector(".muahang-gia").innerHTML;
  tongthanhtien.textContent =
    (
      convertToNumber(tongthanhtien.textContent.slice(0, -2)) +
      convertToNumber(donggiadiv.textContent.slice(0, -6)) *
        Number(soluongmuahang.textContent)
    ).toLocaleString("vi-VN") + " ₫";
  tamtinh.textContent =
    (
      convertToNumber(tamtinh.textContent.slice(0, -2)) +
      convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) *
        Number(soluongmuahang.textContent)
    ).toLocaleString("vi-VN") + " ₫";
  donggiadiv.innerHTML = donggiadiv.textContent.slice(0, -6) + " ₫";
  dongia.append(giamgiadiv, donggiadiv);
  giamgiatong.textContent =
    (
      convertToNumber(giamgiatong.textContent.slice(0, -2)) +
      (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
        convertToNumber(dongia.querySelector(".dg").textContent.slice(0, -2))) *
        Number(soluongmuahang.textContent)
    ).toLocaleString("vi-VN") + " ₫";
  thanhtiendiv.innerHTML =
    (
      convertToNumber(
        muahang.querySelector(".muahang-gia").textContent.slice(0, -6)
      ) * Number(soluongmuahang.textContent)
    ).toLocaleString("vi-VN") + " ₫";
  spansoluong.textContent = soluongmuahang.textContent;
  trash.addEventListener("click", (e) => {
    xoasp.classList.add("active");
    tieptuc.addEventListener(
      "click",
      () => {
        let soluongso = soluong.querySelector("div").textContent;
        tongthanhtien.textContent =
          (
            convertToNumber(tongthanhtien.textContent.slice(0, -2)) -
            convertToNumber(thanhtiendiv.textContent.slice(0, -2))
          ).toLocaleString("vi-VN") + " ₫";
        tamtinh.textContent =
          (
            convertToNumber(tamtinh.textContent.slice(0, -2)) -
            convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) * soluongso
          ).toLocaleString("vi-VN") + " ₫";
        giamgiatong.textContent =
          (
            convertToNumber(giamgiatong.textContent.slice(0, -2)) -
            (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
              convertToNumber(
                dongia.querySelector(".dg").textContent.slice(0, -2)
              )) *
              soluongso
          ).toLocaleString("vi-VN") + " ₫";
        if (hienthiso.children[0].textContent === "1") {
          hienthiso.classList.remove("active");
          hienthiso.children[0].textContent =
            Number(hienthiso.children[0].textContent) - 1;
        } else {
          hienthiso.children[0].textContent =
            Number(hienthiso.children[0].textContent) - 1;
        }
        sessionStorage.removeItem(e.target.nextElementSibling.textContent);
        let keytmp = document.querySelectorAll(".keydiv");
        for (
          let j = Number(e.target.nextElementSibling.textContent);
          j <= sessionStorage.length - 1;
          j++
        ) {
          let tmp = JSON.parse(sessionStorage.getItem(j + 1));
          sessionStorage.setItem(j, JSON.stringify(tmp));
          if (j < sessionStorage.length - 1) {
            keytmp[j].textContent = j;
          }
        }
        if (
          Number(e.target.nextElementSibling.textContent) <=
          sessionStorage.length - 2
        ) {
          sessionStorage.removeItem(sessionStorage.length - 1);
        }
        e.target.closest(".sanpham-all-box").remove();
        xoasp.classList.remove("active");
      },
      { once: true }
    );
    quaylai.addEventListener(
      "click",
      () => {
        xoasp.classList.remove("active");
      },
      { once: true }
    );
  });
  if (!hienthiso.classList.contains("active")) {
    hienthiso.classList.add("active");
    hienthiso.children[0].textContent =
      Number(hienthiso.children[0].textContent) + 1;
  } else {
    hienthiso.children[0].textContent =
      Number(hienthiso.children[0].textContent) + 1;
  }
  let keydiv = document.createElement("div");
  keydiv.classList.add("keydiv");
  let key = hienthiso.children[0].textContent;
  keydiv.textContent = key;
  thanhtien.append(thanhtiendiv, trash, keydiv);
  soluong.append(minus, spansoluong, plus);
  sanphamthem.append(img_giohang, spthemmota, dongia, soluong, thanhtien);
  sanpham_all_box.append(gachchanto, sanphamthem);
  sanphamall.append(sanpham_all_box);
  muahang.classList.remove("active");
  html.style.overflow = "scroll";
  soluongmuahang.textContent = "1";
  datthanhcong.classList.add("active");
  setTimeout(() => {
    datthanhcong.classList.remove("active");
  }, 1500);
  let temp = {
    img: img_giohang.src,
    dongia: donggiadiv.textContent,
    giamgiadiv: giamgiadiv.innerHTML,
    soluong: spansoluong.textContent,
    thanhtien: thanhtiendiv.textContent,
    mota: spthemmota.textContent,
  };
  sessionStorage.setItem(
    hienthiso.children[0].textContent,
    JSON.stringify(temp)
  );
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
function realoadPage() {
  for (let i = 1; i <= sessionStorage.length - 1; i++) {
    let Json = JSON.parse(sessionStorage.getItem(i));
    let sanpham_all_box = document.createElement("div");
    sanpham_all_box.classList.add("sanpham-all-box");
    let gachchanto = document.createElement("div");
    gachchanto.classList.add("gachchan-to");
    let sanphamthem = document.createElement("div");
    sanphamthem.classList.add("box-sanphamthem");
    let img_giohang = document.createElement("img");
    img_giohang.classList.add("box-sanphamthem-img");
    let spthemmota = document.createElement("div");
    spthemmota.classList.add("box-sanphamthem-mota");
    let dongia = document.createElement("div");
    dongia.classList.add("dongia");
    let soluong = document.createElement("div");
    let minus = document.createElement("i");
    let plus = document.createElement("i");
    let thanhtiendiv = document.createElement("div");
    let giamgiadiv = document.createElement("div");
    minus.classList.add("fa-solid", "fa-minus");
    let spansoluong = document.createElement("div");
    minus.addEventListener("click", () => {
      if (minus.nextElementSibling.textContent !== "1") {
        minus.nextElementSibling.textContent =
          Number(minus.nextElementSibling.textContent) - 1;
        let cart = JSON.parse(sessionStorage.getItem(i));
        cart.soluong = Number(cart.soluong) - 1;
        sessionStorage.setItem(i, JSON.stringify(cart));
        let div = document.createElement("div");
        let dongiatmp = dongia.querySelector(".dg");
        let keydiv = document.createElement("div");
        keydiv.classList.add("keydiv");
        keydiv.textContent = i;
        div.textContent =
          (
            convertToNumber(thanhtien.textContent.slice(0, -2)) -
            convertToNumber(dongiatmp.textContent.slice(0, -2))
          ).toLocaleString("vi-VN") + " ₫";
        thanhtiendiv.textContent = div.textContent;
        thanhtien.textContent = "";
        thanhtien.append(div, trash, keydiv);
        tamtinh.textContent =
          (
            convertToNumber(tamtinh.textContent.slice(0, -2)) -
            convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
          ).toLocaleString("vi-VN") + " ₫";
        tongthanhtien.textContent =
          (
            convertToNumber(tongthanhtien.textContent.slice(0, -2)) -
            convertToNumber(donggiadiv.textContent.slice(0, -2))
          ).toLocaleString("vi-VN") + " ₫";
        giamgiatong.textContent =
          (
            convertToNumber(giamgiatong.textContent.slice(0, -2)) -
            (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
              convertToNumber(
                dongia.querySelector(".dg").textContent.slice(0, -2)
              ))
          ).toLocaleString("vi-VN") + " ₫";
      }
    });
    plus.classList.add("fa-solid", "fa-plus");
    plus.addEventListener("click", () => {
      plus.previousElementSibling.textContent =
        Number(plus.previousElementSibling.textContent) + 1;
      let cart = JSON.parse(sessionStorage.getItem(i));
      cart.soluong = Number(cart.soluong) + 1;
      sessionStorage.setItem(i, JSON.stringify(cart));
      let div = document.createElement("div");
      let dongiatmp = dongia.querySelector(".dg");
      let keydiv = document.createElement("div");
      keydiv.classList.add("keydiv");
      keydiv.textContent = i;
      div.textContent =
        (
          convertToNumber(thanhtien.textContent.slice(0, -2)) +
          convertToNumber(dongiatmp.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      thanhtiendiv.textContent = div.textContent;
      thanhtien.textContent = "";
      thanhtien.append(div, trash, keydiv);
      tamtinh.textContent =
        (
          convertToNumber(tamtinh.textContent.slice(0, -2)) +
          convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
        ).toLocaleString("vi-VN") + " ₫";
      tongthanhtien.textContent =
        (
          convertToNumber(tongthanhtien.textContent.slice(0, -2)) +
          convertToNumber(donggiadiv.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      giamgiatong.textContent =
        (
          convertToNumber(giamgiatong.textContent.slice(0, -2)) +
          (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
            convertToNumber(
              dongia.querySelector(".dg").textContent.slice(0, -2)
            ))
        ).toLocaleString("vi-VN") + " ₫";
    });

    soluong.classList.add("soluong");
    let thanhtien = document.createElement("div");
    thanhtien.classList.add("thanhtien");
    let trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash");
    img_giohang.src = Json.img;
    spthemmota.textContent = Json.mota;
    giamgiadiv.innerHTML = Json.giamgiadiv;
    let donggiadiv = document.createElement("div");
    donggiadiv.classList.add("dg");
    donggiadiv.textContent = Json.dongia;
    tongthanhtien.textContent =
      (
        convertToNumber(tongthanhtien.textContent.slice(0, -2)) +
        convertToNumber(donggiadiv.textContent.slice(0, -2)) *
          Number(Json.soluong)
      ).toLocaleString("vi-VN") + " ₫";
    tamtinh.textContent =
      (
        convertToNumber(tamtinh.textContent.slice(0, -2)) +
        convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) *
          Number(Json.soluong)
      ).toLocaleString("vi-VN") + " ₫";
    donggiadiv.textContent = donggiadiv.textContent.slice(0, -2) + " ₫";
    dongia.append(giamgiadiv, donggiadiv);
    giamgiatong.textContent =
      (
        convertToNumber(giamgiatong.textContent.slice(0, -2)) +
        (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
          convertToNumber(
            dongia.querySelector(".dg").textContent.slice(0, -2)
          )) *
          Number(Json.soluong)
      ).toLocaleString("vi-VN") + " ₫";
    thanhtiendiv.innerHTML =
      (
        convertToNumber(donggiadiv.textContent.slice(0, -2)) *
        Number(Json.soluong)
      ).toLocaleString("vi-VN") + " ₫";
    spansoluong.textContent = Json.soluong;
    trash.addEventListener("click", (e) => {
      xoasp.classList.add("active");
      tieptuc.addEventListener(
        "click",
        () => {
          let soluongso = soluong.querySelector("div").textContent;
          tongthanhtien.textContent =
            (
              convertToNumber(tongthanhtien.textContent.slice(0, -2)) -
              convertToNumber(thanhtiendiv.textContent.slice(0, -2))
            ).toLocaleString("vi-VN") + " ₫";
          tamtinh.textContent =
            (
              convertToNumber(tamtinh.textContent.slice(0, -2)) -
              convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) * soluongso
            ).toLocaleString("vi-VN") + " ₫";
          giamgiatong.textContent =
            (
              convertToNumber(giamgiatong.textContent.slice(0, -2)) -
              (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
                convertToNumber(
                  dongia.querySelector(".dg").textContent.slice(0, -2)
                )) *
                soluongso
            ).toLocaleString("vi-VN") + " ₫";

          if (hienthiso.children[0].textContent === "1") {
            hienthiso.classList.remove("active");
            hienthiso.children[0].textContent =
              Number(hienthiso.children[0].textContent) - 1;
          } else {
            hienthiso.children[0].textContent =
              Number(hienthiso.children[0].textContent) - 1;
          }
          sessionStorage.removeItem(e.target.nextElementSibling.textContent);
          let keytmp = document.querySelectorAll(".keydiv");
          for (let j = i; j <= sessionStorage.length - 1; j++) {
            let tmp = JSON.parse(sessionStorage.getItem(j + 1));
            sessionStorage.setItem(j, JSON.stringify(tmp));
            if (j < sessionStorage.length - 1) {
              keytmp[j].textContent = j;
            }
          }
          if (i <= sessionStorage.length - 2) {
            sessionStorage.removeItem(sessionStorage.length - 1);
          }
          e.target.closest(".sanpham-all-box").remove();
          xoasp.classList.remove("active");
        },
        { once: true }
      );
      quaylai.addEventListener(
        "click",
        () => {
          xoasp.classList.remove("active");
        },
        { once: true }
      );
    });
    if (!hienthiso.classList.contains("active")) {
      hienthiso.classList.add("active");
      hienthiso.children[0].textContent =
        Number(hienthiso.children[0].textContent) + 1;
    } else {
      hienthiso.children[0].textContent =
        Number(hienthiso.children[0].textContent) + 1;
    }
    let keydiv = document.createElement("div");
    keydiv.classList.add("keydiv");
    let key = hienthiso.children[0].textContent;
    keydiv.textContent = key;
    thanhtien.append(thanhtiendiv, trash, keydiv);
    soluong.append(minus, spansoluong, plus);
    sanphamthem.append(img_giohang, spthemmota, dongia, soluong, thanhtien);
    sanpham_all_box.append(gachchanto, sanphamthem);
    sanphamall.append(sanpham_all_box);
    muahang.classList.remove("active");
    html.style.overflow = "scroll";
    soluongmuahang.textContent = "1";
  }
}

realoadPage();

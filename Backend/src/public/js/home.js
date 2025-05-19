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

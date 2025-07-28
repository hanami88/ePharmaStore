const chitiet = document.querySelectorAll(".btn-sc");
const thongtinchitiet = document.querySelector(".container-chitietdonhang");
const tat = document.querySelector(".fa-circle-xmark");
const btn_xoa = document.querySelector(".btn-sm");
const btn_xacnhan = document.querySelector(".btn-sk");
const btn_quaylai = document.querySelector(".thongbao-quaylai");
const btn_tieptuc = document.querySelector(".thongbao-tieptuc");
const form_xoa = document.querySelector(".formxoadonhang");
const datthanhcong = document.querySelector(".datthanhcong");
const xoasp = document.querySelector(".xoasp");
chitiet.forEach((element) => {
  element.addEventListener("click", function () {
    let chuaorder = element.closest(".chuaorder");
    const id = chuaorder.querySelector(".idorder").textContent;
    fetch("/admin/chitietdonhang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        const info = data.thongtin;
        let tongtiengoc = 0;
        info.giohang.forEach((i) => {
          tongtiengoc += i.giagoc * i.soluong;
        });
        document.getElementById("tentk").textContent =
          "Số điện thoại (TK đặt) : " + info.userid.sdt;
        document.getElementById("hoten").textContent = info.diachi.hoten;
        document.getElementById("sdt").textContent = info.userid.sdt;
        document.getElementById("diachi").textContent =
          info.diachi.sonha +
          ", " +
          info.diachi.phuongxa +
          ", " +
          info.diachi.quanhuyen +
          ", " +
          info.diachi.tinhthanh;
        if (info.trangthai == "Đã xác nhận") {
          document.getElementById("trangthaidonhang-xacnhan").style.display =
            "block";
          document.getElementById("trangthaidonhang-xacnhan").textContent =
            info.trangthai;
          document.getElementById("trangthaidonhang1").style.display = "none";
        } else {
          document.getElementById("trangthaidonhang1").style.display = "block";
          document.getElementById("trangthaidonhang1").textContent =
            info.trangthai;
          document.getElementById("trangthaidonhang-xacnhan").style.display =
            "none";
        }
        const date = new Date(info.createdAt);
        const gio = date.getHours().toString().padStart(2, "0");
        const phut = date.getMinutes().toString().padStart(2, "0");
        const ngay = date.getDate().toString().padStart(2, "0");
        const thang = (date.getMonth() + 1).toString().padStart(2, "0");
        const nam = date.getFullYear();
        document.getElementById(
          "time"
        ).textContent = `${gio}:${phut} - ${ngay}/${thang}/${nam}`;
        document.getElementById("madonhang").textContent = info._id;
        document.getElementById("hienthighichu").textContent = info.ghichu;
        document.getElementById("spnho").textContent =
          "( " + info.giohang.length + " sản phẩm )";
        document.getElementById("tienhang").textContent =
          tongtiengoc.toLocaleString("vi-VN") + " ₫";
        document.getElementById("giamgia").textContent =
          "- " + (tongtiengoc - info.tongtien).toLocaleString("vi-VN") + " ₫";
        document.getElementById("tongtien").textContent =
          info.tongtien.toLocaleString("vi-VN") + " ₫";
        const danhSachDiv = document.querySelector(".lichsu-hienthidonhang1");
        danhSachDiv.innerHTML = "";
        info.giohang.forEach((sp) => {
          const thanhtien = sp.giaban * sp.soluong;
          const htmlDonHang = `
    <div class="sanpham-all-box">
      <div class="gachchan-to1"></div>
      <div class="box-sanphamthem">
        <img class="box-sanphamthem-img" src="/img/${sp.hinhanh}" />
        <div class="box-sanphamthem-mota">
          ${sp.mota}
        </div>
        <div class="dongia">
          <div><s>${sp.giagoc.toLocaleString("vi-VN")} ₫</s></div>
          <div class="dg">${sp.giaban.toLocaleString("vi-VN")} ₫</div>
        </div>
        <div class="soluong">
          <div class="slgiohang">x${sp.soluong}</div>
        </div>
        <div class="thanhtien">
          <div>${thanhtien.toLocaleString("vi-VN")} ₫</div>
        </div>
      </div>
    </div>
  `;
          danhSachDiv.insertAdjacentHTML("beforeend", htmlDonHang);
        });
      })
      .catch((err) => {
        console.error("Lỗi khi lấy thông tin");
      });
    btn_xoa.addEventListener("click", function () {
      xoasp.classList.add("active");
      btn_tieptuc.addEventListener("click", function (e) {
        form_xoa.action = "/admin/" + id + "/softdeletedonhang";
        form_xoa.submit();
        datthanhcong.classList.add("active");
        setTimeout(() => {
          datthanhcong.classList.remove("active");
        }, 1500);
      });
      btn_quaylai.addEventListener("click", function (e) {
        xoasp.classList.remove("active");
        btn_tieptuc.removeEventListener("click");
      });
    });
    btn_xacnhan.addEventListener("click", function () {
      form_xoa.action = "/admin/" + id + "/xacnhandonhang";
      form_xoa.submit();
      datthanhcong.classList.add("active");
      setTimeout(() => {
        datthanhcong.classList.remove("active");
      }, 1500);
    });
    thongtinchitiet.classList.add("active");
    tat.addEventListener("click", function () {
      thongtinchitiet.classList.remove("active");
    });
  });
});

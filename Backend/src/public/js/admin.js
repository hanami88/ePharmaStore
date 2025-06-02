document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.querySelector(".file");
  const uploadBox = document.querySelector(".upload-wrapper");
  const iupload = document.querySelector(".fa-cloud-arrow-up");
  const formthemsp = document.querySelector(".form");
  const datthanhcong = document.querySelector(".datthanhcong");
  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      uploadBox.classList.add("active");
      iupload.classList.add("active");
    } else {
      iupload.classList.add("active");
      uploadBox.classList.remove("active");
    }
  });
  document
    .getElementById("hinhanh")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      const preview = document.getElementById("preview");
      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = "block";
        };
        reader.readAsDataURL(file);
      } else {
        preview.src = "#";
        preview.style.display = "none";
      }
    });
  formthemsp.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await fetch("/admin/add", {
      method: "POST",
      body: formData,
    });
    formthemsp.reset();
    const preview = document.getElementById("preview");
    preview.src = "";
    preview.style.display = "none";
    document.querySelector(".upload-wrapper").classList.remove("active");
    document.querySelector(".fa-cloud-arrow-up").classList.remove("active");
    document.getElementById("hinhanh").value = "";
    datthanhcong.classList.add("active");
    setTimeout(() => {
      datthanhcong.classList.remove("active");
    }, 1500);
  });
});

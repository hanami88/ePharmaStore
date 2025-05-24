const fileInput = document.querySelector(".file");
const uploadBox = document.querySelector(".upload-wrapper");
const iupload = document.querySelector(".fa-cloud-arrow-up");
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    uploadBox.classList.add("active");
    iupload.classList.add("active");
  } else {
    iupload.classList.add("active");
    uploadBox.classList.remove("active");
  }
});
document.getElementById("hinhanh").addEventListener("change", function (event) {
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

import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Khởi tạo i18next
i18next
  .use(HttpBackend) // Load file JSON từ folder locales
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
  .init(
    {
      fallbackLng: "vi", // Ngôn ngữ mặc định
      debug: true, // Bật debug để xem log (tắt khi production)
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json", // Đường dẫn đến file ngôn ngữ
      },
      detection: {
        order: ["localStorage", "navigator"], // Ưu tiên localStorage, sau đó là ngôn ngữ trình duyệt
        caches: ["localStorage"], // Lưu ngôn ngữ đã chọn vào localStorage
      },
    },
    (err, t) => {
      // Callback sau khi i18next load xong
      if (err) return console.error("i18next init error:", err);
      // Cập nhật nội dung lần đầu
      updateContent();
      updateActiveButton();
    }
  );

// Hàm cập nhật nội dung
function updateContent() {
  // Tìm tất cả element có data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

// Hàm đổi ngôn ngữ
window.changeLanguage = (lang) => {
  i18next.changeLanguage(lang, (err, t) => {
    if (err) return console.error("Change language error:", err);
    // Cập nhật HTML lang attribute
    document.documentElement.lang = lang;
    // Cập nhật nội dung
    updateContent();
  });
};

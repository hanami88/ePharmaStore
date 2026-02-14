(function () {
  "use strict";
  // ==================== KHỞI TẠO ====================
  var ws;
  var chatInput = document.getElementById("chatInput");
  var chatSend = document.getElementById("chatSend");
  var chatBody = document.getElementById("chatBody"); // Container chứa tin nhắn
  // ==================== KẾT NỐI WEBSOCKET ====================
  function connectWebSocket() {
    ws = new WebSocket("ws://localhost:3000");
    ws.onopen = function () {
      console.log("WebSocket đã kết nối");
    };
    ws.onmessage = function (event) {
      try {
        var data = JSON.parse(event.data);
        handleMessage(data);
      } catch (e) {
        console.error("Lỗi parse JSON:", e);
      }
    };
    ws.onerror = function (error) {
      console.error(" WebSocket lỗi:", error);
    };
    ws.onclose = function () {
      console.log(" WebSocket đóng, đang reconnect...");
      // Reconnect sau 3 giây
      setTimeout(function () {
        connectWebSocket();
      }, 3000);
    };
  }
  // ==================== GỬI TIN NHẮN ====================
  function sendMessage() {
    try {
      var content = chatInput.value.trim();
      if (content === "") return;
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        alert("Chưa kết nối đến server!");
        return;
      }
      var message = {
        type: "chat",
        token: getCookie("accessToken"),
        content: content,
        timestamp: new Date().toISOString(),
      };
      ws.send(JSON.stringify(message));
      chatInput.value = "";
      addMyMessage(content);
    } catch (err) {
      console.log(err);
    }
  }
  // ==================== XỬ LÝ TIN NHẮN NHẬN ====================
  function handleMessage(data) {
    if (data.type === "auth_success") {
      console.log("Xác thực thành công");
    } else if (data.type === "new_message") {
      addOtherMessage(data.data);
    } else if (data.type === "typing") {
      showTypingIndicator(data.user);
    }
  }

  // ==================== THÊM TIN NHẮN VÀO UI ====================
  function addMyMessage(content) {
    var messageDiv = document.createElement("div");
    messageDiv.className = "chat-message user-message";
    messageDiv.innerHTML =
      '<div class="message-content">' +
      "<p>" +
      escapeHtml(content) +
      "</p>" +
      "</div>" +
      '<span class="message-time">' +
      getCurrentTime() +
      "</span>";
    chatBody.appendChild(messageDiv);
    scrollToBottom();
  }

  function addOtherMessage(message) {
    var messageDiv = document.createElement("div");
    messageDiv.className = "chat-message bot-message";

    messageDiv.innerHTML =
      '<div class="message-content">' +
      "<strong>" +
      escapeHtml(message.sender.ten) +
      "</strong>" +
      "<p>" +
      escapeHtml(message.content) +
      "</p>" +
      "</div>" +
      '<span class="message-time">' +
      formatTime(message.createdAt) +
      "</span>";

    chatBody.appendChild(messageDiv);
    scrollToBottom();
  }

  // ==================== SỰ KIỆN ====================
  chatSend.addEventListener("click", function () {
    sendMessage();
  });

  // Nhấn Enter trong input
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
  // ==================== HELPER FUNCTIONS ====================

  function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function getCurrentTime() {
    var now = new Date();
    return (
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0")
    );
  }

  function formatTime(isoString) {
    var date = new Date(isoString);
    return (
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0")
    );
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return null;
  }

  function showTypingIndicator(userName) {
    var indicator = document.getElementById("typingIndicator");
    if (indicator) {
      indicator.textContent = userName + " đang gõ...";
      indicator.style.display = "block";

      setTimeout(function () {
        indicator.style.display = "none";
      }, 3000);
    }
  }
  connectWebSocket();
})();

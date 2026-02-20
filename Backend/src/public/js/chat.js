(function () {
  "use strict";
  var ws;
  var chatInput = document.getElementById("chatInput");
  var chatSend = document.getElementById("chatSend");
  var chatBody = document.getElementById("chatBody"); // Container chứa tin nhắn
  function connectWebSocket() {
    const token = getCookie("accessToken");
    if (!token) return;
    ws = new WebSocket(`ws://localhost:3000?token=${token}`);
    ws.onopen = function () {
      console.log("WebSocket đã kết nối");
    };
    ws.onmessage = function (event) {
      try {
        var data = JSON.parse(event.data);
        addOtherMessage(data.message);
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
  chatSend.addEventListener("click", function () {
    sendMessage();
  });
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

import { buildNotification } from "./notification-view.js";

export function notificationController(notificationContainer) {
  function showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.classList.add("notification", type);
    notification.innerHTML = buildNotification(message);
    notificationContainer.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 4000);
  }

  return {
    showNotification,
  };
}

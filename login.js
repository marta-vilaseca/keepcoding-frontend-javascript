import { notificationController } from "./notification/notification-controller.js";
import { loginController } from "./login/login-controller.js";

const loginForm = document.querySelector("#login-form");
const notificationList = document.querySelector(".notification-list");

const { showNotification } = notificationController(notificationList);

loginForm.addEventListener("login-notification", (event) => {
  event.stopPropagation();
  showNotification(event.detail.message, event.detail.type);
});

document.addEventListener("DOMContentLoaded", () => {
  loginController(loginForm);
});

window.addEventListener("offline", () => {
  showNotification("Has perdido la conexión!", "error");
});

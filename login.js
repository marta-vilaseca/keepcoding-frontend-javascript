import { notificationController } from "./notification/notification-controller.js";
import { loginController } from "./login/login-controller.js";

const loginForm = document.querySelector("#login-form");
const notifications = document.querySelector("#notifications");

const { showNotification } = notificationController(notifications);

loginForm.addEventListener("login-notification", (event) => {
  event.stopPropagation();
  showNotification(event.detail.message, event.detail.type);
});

loginController(loginForm);

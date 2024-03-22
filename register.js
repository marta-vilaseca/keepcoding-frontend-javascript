import { notificationController } from "./notification/notification-controller.js";
import { registerController } from "./register/register-controller.js";

const registerForm = document.querySelector("#register-form");
const notificationList = document.querySelector(".notification-list");

const { showNotification } = notificationController(notificationList);

registerForm.addEventListener("register-notification", (event) => {
  event.stopPropagation();
  showNotification(event.detail.message, event.detail.type);
});

document.addEventListener("DOMContentLoaded", () => {
  registerController(registerForm);
});

window.addEventListener("offline", () => {
  showNotification("Has perdido la conexión!", "error");
});

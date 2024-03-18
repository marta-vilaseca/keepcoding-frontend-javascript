import { notificationController } from "./notification/notification-controller.js";
import { registerController } from "./register/register-controller.js";

const registerForm = document.querySelector("#register-form");
const notifications = document.querySelector("#notifications");

const { showNotification } = notificationController(notifications);

registerForm.addEventListener("register-notification", (event) => {
  event.stopPropagation();
  showNotification(event.detail.message, event.detail.type);
});

registerController(registerForm);

import { notificationController } from "./notification/notification-controller.js";
import { adsListController } from "./ad-list/ads-controller.js";
import { sessionController } from "./session/session-controller.js";

const notificationList = document.querySelector(".notification-list");
const adsList = document.querySelector(".productos");
const session = document.querySelector("#session");

sessionController(session);
const { showNotification } = notificationController(notificationList);

adsList.addEventListener("error-loading-ads", (event) => {
  showNotification(event.detail.message, event.detail.type);
  event.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
  adsListController(adsList);
});

window.addEventListener("offline", () => {
  showNotification("Has perdido la conexión!", "error");
});

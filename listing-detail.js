import { notificationController } from "./notification/notification-controller.js";
import { listingDetailController } from "./listing-detail/listing-detail-controller.js";
import { sessionController } from "./session/session-controller.js";

const notificationList = document.querySelector(".notification-list");
const listingDetail = document.querySelector("#listingDetail");
const session = document.querySelector("#session");

sessionController(session);
const { showNotification } = notificationController(notificationList);

listingDetail.addEventListener("error-loading-listing", (event) => {
  showNotification(event.detail.message, event.detail.type);
  event.stopPropagation();
});

listingDetail.addEventListener("delete-listing-notification", (event) => {
  showNotification(event.detail.message, event.detail.type);
  event.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
  listingDetailController(listingDetail);
});

window.addEventListener("offline", () => {
  showNotification("Has perdido la conexión!", "error");
});

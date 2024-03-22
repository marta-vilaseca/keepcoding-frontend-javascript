import { notificationController } from "./notification/notification-controller.js";
import { listingCreationController } from "./listing-creation/listing-creation-controller.js";
import { sessionController } from "./session/session-controller.js";

const notificationList = document.querySelector(".notification-list");
const listingCreation = document.querySelector("#listing-creation-form");
const session = document.querySelector("#session");

sessionController(session);
const { showNotification } = notificationController(notificationList);

listingCreation.addEventListener("error-saving-listing", (event) => {
  showNotification(event.detail.message, event.detail.type);
  event.stopPropagation();
});

listingCreation.addEventListener("listing-created-notification", (event) => {
  showNotification(event.detail.message, event.detail.type);
  event.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    showNotification("Necesitas estar registrado y autenticado como usuario para crear un anuncio", "error");
    listingCreation.classList.add("hidden");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  }

  listingCreationController(listingCreation);
});

window.addEventListener("offline", () => {
  showNotification("Has perdido la conexión!", "error");
});

import { listingCreationController } from "./listing-creation/listing-creation-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "index.html";
  }

  const listingCreation = document.querySelector("#listing-creation-form");
  listingCreationController(listingCreation);
});

import { listingDetailController } from "./listing-detail/listing-detail-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const listingDetail = document.querySelector("#listingDetail");
  listingDetailController(listingDetail);
});

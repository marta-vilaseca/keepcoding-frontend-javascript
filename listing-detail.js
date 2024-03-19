import { listingDetailController } from "./listing-detail/listing-detail-controller.js";
import { sessionController } from "./session/session-controller.js";

const session = document.querySelector("#session");
sessionController(session);

document.addEventListener("DOMContentLoaded", () => {
  const listingDetail = document.querySelector("#listingDetail");
  listingDetailController(listingDetail);
});

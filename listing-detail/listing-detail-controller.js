import { getListingDetail } from "./listing-detail-model.js";
import { buildListingDetail } from "./listing-detail-view.js";

export async function listingDetailController(listingDetail) {
  const params = new URLSearchParams(window.location.search);
  const listingId = params.get("id");
  if (!listingId) {
    window.location.href = "./index.html";
  }

  goBackButton(listingDetail);

  try {
    const listing = await getListingDetail(listingId);
    const container = listingDetail.querySelector(".container");
    container.innerHTML = buildListingDetail(listing);
  } catch (error) {
    alert(error);
  }

  function goBackButton(listingDetail) {
    const backButton = listingDetail.querySelector("#goBack");
    backButton.addEventListener("click", () => {
      window.history.back();
    });
  }
}

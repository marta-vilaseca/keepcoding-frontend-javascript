import { getListingDetail, deleteListing } from "./listing-detail-model.js";
import { buildListingDetail } from "./listing-detail-view.js";
import { getUserDetails } from "../utils/getUserDetails.js";

export async function listingDetailController(listingDetail) {
  const params = new URLSearchParams(window.location.search);
  const listingId = params.get("id");
  if (!listingId) {
    window.location.href = "./index.html";
  }

  goBackButton(listingDetail);

  try {
    const listing = await getListingDetail(listingId);
    handleRemoveListingButton(listingDetail, listing);
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

  async function handleRemoveListingButton(listingDetail, listing) {
    const token = localStorage.getItem("token");
    const userData = await getUserDetails(token);

    if (listing.userId === userData.id) {
      const removeListingButton = listingDetail.querySelector("#removeAdButton");
      removeListingButton.removeAttribute("disabled");
      removeListingButton.addEventListener("click", () => {
        removeListing(listing.id, token);
      });
    }
  }

  async function removeListing(listingId, token) {
    if (window.confirm("Seguro que quieres borrar el anuncio?")) {
      try {
        await deleteListing(listingId, token);
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      } catch (error) {
        alert(error);
      }
    }
  }
}

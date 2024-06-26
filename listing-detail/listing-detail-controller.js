import { dispatchEvent } from "../utils/dispatchEvent.js";
import { loaderController } from "../loader/loader-controller.js";
import { getListingDetail, deleteListing } from "./listing-detail-model.js";
import { buildListingDetail, buildEmptyListing } from "./listing-detail-view.js";
import { getUserDetails } from "../utils/getUserDetails.js";

export async function listingDetailController(listingDetail) {
  const params = new URLSearchParams(window.location.search);
  const listingId = params.get("id");
  const spinner = document.querySelector("#loader");
  const { showLoader, hideLoader } = loaderController(spinner);

  if (!listingId) {
    window.location.href = "./index.html";
  }

  goBackButton(listingDetail);

  try {
    showLoader();
    const listing = await getListingDetail(listingId);
    const container = listingDetail.querySelector(".container");
    handleRemoveListingButton(listingDetail, listing);

    if (listing.id) {
      container.innerHTML = buildListingDetail(listing);
    } else {
      container.innerHTML = buildEmptyListing();
    }
  } catch (errorMessage) {
    dispatchEvent(
      "error-loading-listing",
      {
        message: errorMessage,
        type: "error",
      },
      listingDetail
    );
  } finally {
    hideLoader();
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

    if (token && listing.userId === userData.id) {
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
        showLoader();
        await deleteListing(listingId, token);
        dispatchEvent(
          "delete-listing-notification",
          {
            message: "Se ha eliminado con éxito",
            type: "success",
          },
          listingDetail
        );
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      } catch (errorMessage) {
        dispatchEvent(
          "delete-listing-notification",
          {
            message: errorMessage,
            type: "error",
          },
          listingDetail
        );
      } finally {
        hideLoader();
      }
    }
  }
}

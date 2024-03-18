import { dispatchEvent } from "../utils/dispatchEvent.js";
import { getAds } from "./ads-model.js";
import { buildAd, buildEmptyAdsList } from "./ads-view.js";

export async function adsListController(adsList) {
  const spinner = adsList.querySelector(".lds-ring");
  try {
    spinner.classList.toggle("hidden");
    const ads = await getAds();
    if (ads.length > 0) {
      renderAds(ads, adsList);
    } else {
      renderEmptyAdsList(adsList);
    }
  } catch (errorMessage) {
    // dispatchErrorEvent(errorMessage, adsList)
    dispatchEvent(
      "error-loading-adss",
      {
        message: errorMessage,
        type: "error",
      },
      adsList
    );
  } finally {
    spinner.classList.toggle("hidden");
  }
}

function renderAds(ads, adsList) {
  ads.forEach((ad) => {
    const adItem = document.createElement("article");
    adItem.classList.add("producto");
    adItem.innerHTML = buildAd(ad);
    adsList.appendChild(adItem);
  });
}

function renderEmptyAdsList(adsList) {
  adsList.innerHTML = buildEmptyAdsList();
}

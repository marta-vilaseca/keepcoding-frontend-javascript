import { dispatchEvent } from "../utils/dispatchEvent.js";
import { getAds, getAdsByTag, getAdsByName } from "./ads-model.js";
import { buildAd, buildEmptyAdsList } from "./ads-view.js";

export async function adsListController(adsList) {
  const params = new URLSearchParams(window.location.search);
  const tagFilter = params.get("tags_like");
  const nameFilter = params.get("name_like");
  const spinner = document.querySelector("#loader");

  try {
    spinner.classList.toggle("hidden");
    adsList.innerHTML = "";

    let ads;
    if (tagFilter) {
      ads = await getAdsByTag(tagFilter);
      renderAds(ads, adsList, `Anuncios con la etiqueta "${tagFilter}"`);
    } else if (nameFilter) {
      ads = await getAdsByName(nameFilter);
      renderAds(ads, adsList, `Resultados para la búsqueda "${nameFilter}"`);
    } else {
      ads = await getAds();
      renderAds(ads, adsList);
    }

    if (ads.length === 0) {
      renderEmptyAdsList(adsList);
    }
  } catch (errorMessage) {
    dispatchEvent(
      "error-loading-ads",
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

function renderAds(ads, adsList, title) {
  if (title) {
    const header = document.createElement("h2");
    header.classList.add("productos__header");
    header.innerHTML = title;
    adsList.appendChild(header);
  }

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

import { buildLoader } from "./loader-view.js";

export const loaderController = (loader) => {
  const showLoader = () => {
    loader.classList.remove("hidden");
    loader.innerHTML = buildLoader();
  };

  const hideLoader = () => {
    loader.classList.add("hidden");
    loader.innerHTML = "";
  };

  return {
    showLoader,
    hideLoader,
  };
};

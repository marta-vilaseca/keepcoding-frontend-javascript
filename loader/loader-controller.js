import { buildLoader } from "./loader-view.js";

export const loaderController = (loader) => {
  const showLoader = () => {
    loader.classList.add("active");
    loader.innerHTML = buildLoader();
  };

  const hideLoader = () => {
    loader.classList.remove("active");
    loader.innerHTML = "";
  };

  return {
    showLoader,
    hideLoader,
  };
};

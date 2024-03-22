import { dispatchEvent } from "../utils/dispatchEvent.js";
import { loaderController } from "../loader/loader-controller.js";
import { createListing } from "./listing-creation-model.js";

export function listingCreationController(listingCreation) {
  const spinner = document.querySelector("#loader");
  const { showLoader, hideLoader } = loaderController(spinner);

  listingCreation.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(listingCreation);

    const defaultImageURL = "https://res.cloudinary.com/dyj8i0oym/image/upload/v1710867896/jspop/xtdia6npnmxgk6zpqbpq.png";

    const name = formData.get("title");
    const price = parseInt(formData.get("price"));
    const description = formData.get("description");
    let sale = formData.get("sale");
    let photo = formData.get("photo");
    let tags = formData.get("tags");

    !photo ? (photo = defaultImageURL) : (photo = `https://res.cloudinary.com/dyj8i0oym/image/upload/v1710867898/jspop/${photo}`);
    sale === "venta" ? (sale = true) : (sale = false);

    if (tags) tags = tags.split(",").map((name) => name.trim());

    try {
      showLoader();
      await createListing(name, price, description, sale, photo, tags);
      dispatchEvent(
        "create-listing-notification",
        {
          message: "Se ha guardado con éxito",
          type: "success",
        },
        listingCreation
      );
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (errorMessage) {
      dispatchEvent(
        "create-listing-notification",
        {
          message: errorMessage,
          type: "error",
        },
        listingCreation
      );
    } finally {
      hideLoader();
    }
  });
}

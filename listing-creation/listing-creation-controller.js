import { createListing } from "./listing-creation-model.js";

export function listingCreationController(listingCreation) {
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
      await createListing(name, price, description, sale, photo, tags);
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      alert(error);
    }
  });
}

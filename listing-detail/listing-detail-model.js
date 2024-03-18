function parseListing(listing) {
  return {
    id: listing.id,
    name: listing.name,
    sale: listing.sale,
    price: listing.price,
    photo: listing.photo,
    tags: listing.tags,
    description: listing.description,
  };
}

export async function getListingDetail(id) {
  const url = `http://localhost:8000/api/listings/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const listing = parseListing(data);
    return listing;
  } catch (error) {
    throw new Error("Error obteniendo el anuncio");
  }
}

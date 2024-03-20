function parseListing(listing) {
  return {
    id: listing.id,
    name: listing.name,
    sale: listing.sale,
    price: listing.price,
    photo: listing.photo,
    tags: listing.tags,
    description: listing.description,
    userId: listing.userId,
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

export async function deleteListing(id, token) {
  const url = `http://localhost:8000/api/listings/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("Error borrando anuncio");
  }
}

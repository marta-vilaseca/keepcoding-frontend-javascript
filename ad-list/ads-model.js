function parseAds(data) {
  return data.map((data) => ({
    id: data.id,
    name: data.name,
    sale: data.sale,
    price: data.price,
    photo: data.photo,
    tags: data.tags,
    description: data.description,
  }));
}

export async function getAds() {
  const url = "http://localhost:8000/api/listings";
  let ads = [];

  try {
    const response = await fetch(url);
    const data = await response.json();
    ads = parseAds(data);
  } catch (error) {
    throw new Error("Error obteniendo anuncios");
  }

  return ads;
}

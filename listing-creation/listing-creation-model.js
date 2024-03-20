export const createListing = async (name, price, description, sale, photo, tags) => {
  const url = "http://localhost:8000/api/listings";
  const token = localStorage.getItem("token");

  const body = {
    name: name,
    price: price,
    description: description,
    sale: sale,
    photo: photo,
    tags: tags,
  };

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};

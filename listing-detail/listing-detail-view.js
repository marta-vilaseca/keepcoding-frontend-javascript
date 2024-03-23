export function buildListingDetail(listing) {
  let tagsHTML = "";
  if (listing.tags) {
    tagsHTML += `<ul class="product__tags">`;
    listing.tags.forEach((tag) => {
      tagsHTML += `<li class="tag"><a href="/?tags_like=${tag}">${tag}</a></li>`;
    });
    tagsHTML += `</ul>`;
  }
  return `
    <article class="product">
        <span class="product__price">${listing.price}€</span>
        <div class="product__info">
            <span class="category">${listing.sale ? "Se vende" : "Se busca"}</span>
            <h3>${listing.name}</h3>
        </div>
        <div class="product__details">
            <div class="product__photo"><img src="${listing.photo}" alt="Imagen de ${listing.name}"></div>
            <div class="product__description">
                <div class="text">${listing.description}</div>
                ${tagsHTML}
            </div>
        </div>
    </article>
    `;
}

export function buildEmptyListing() {
  return `
    <article class="product">
        <h3 class="empty">Lo sentimos, parece que ese anuncio no existe</h3>
    </article>
    `;
}

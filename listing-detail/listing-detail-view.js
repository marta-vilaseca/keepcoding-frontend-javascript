export function buildListingDetail(listing) {
  let tagsHTML = "";
  if (listing.tags) {
    tagsHTML += `<ul class="producto__tags">`;
    listing.tags.forEach((tag) => {
      tagsHTML += `<li class="tag"><a href="/?tags_like=${tag}">${tag}</a></li>`;
    });
    tagsHTML += `</ul>`;
  }
  return `
    <article class="producto">
        <span class="producto__precio">${listing.price}€</span>
        <div class="producto__info">
            <span class="categoria">${listing.sale ? "Se vende" : "Se busca"}</span>
            <h3>${listing.name}</h3>
        </div>
        <div class="producto__detalles">
            <div class="producto__foto"><img src="${listing.photo}" alt="Imagen de ${listing.name}"></div>
            <div class="producto__descripcion">
                <div class="texto">${listing.description}</div>
                ${tagsHTML}
            </div>
        </div>
    </article>
    `;
}

export function buildEmptyListing() {
  return `
    <article class="producto">
        <h3 class="empty">Lo sentimos, parece que ese anuncio no existe</h3>
    </article>
    `;
}

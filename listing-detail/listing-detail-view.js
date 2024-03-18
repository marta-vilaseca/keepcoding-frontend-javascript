export function buildListingDetail(listing) {
  let tagsHTML = "";
  listing.tags.forEach((tag) => {
    tagsHTML += `<li class="tag"><a href="/?tags=${tag}">${tag}</a></li>`;
  });
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
                <ul class="tags">${tagsHTML}</ul>
            </div>
        </div>
    </article>
    `;
}

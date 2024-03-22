export function buildAd(ad) {
  let tagsHTML = "";
  if (ad.tags) {
    tagsHTML += `<ul class="producto__tags">`;
    ad.tags.forEach((tag) => {
      tagsHTML += `<li class="tag"><a href="/?tags_like=${tag}">${tag}</a></li>`;
    });
    tagsHTML += `</ul>`;
  }

  return `
        <span class="producto__precio">${ad.price}€</span>
        <div class="producto__info">
            <span class="categoria">${ad.sale ? "Se vende" : "Se busca"}</span>
            <a href="listing-detail.html?id=${ad.id}"><h3 title="${ad.name}">${ad.name}</h3></a>
        </div>
        <div class="producto__foto">
            <a href="listing-detail.html?id=${ad.id}"><img src="${ad.photo}" alt="Imagen de ${ad.name}"></a>
        </div>
        ${tagsHTML}
    `;
}

export function buildEmptyAdsList() {
  return `<h3 class="empty">Lo sentimos, no se han encontrado anuncios</h3>`;
}

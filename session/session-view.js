export const buildSession = () => {
  return `<ul>
    <li><a href="./login.html">Log in</a></li>
    <li><a href="./register.html">Registrarse</a></li>  
  </ul>`;
};

export const buildAuthenticatedSession = (userDetails) => {
  console.log(userDetails);
  return `<ul>
    <li>Hola, <strong>${userDetails.username}</strong>!</li>
    <li><button>Cerrar sesión</button></li>
    <li><a href="./create-listing.html">Crear anuncio</a></li>
  </ul>`;
};

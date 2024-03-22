export const buildSession = () => {
  return `<ul>
    <li><a href="./login.html">Log in</a></li>
    <li><a href="./register.html">Registrarse</a></li>  
  </ul>`;
};

export const buildAuthenticatedSession = (userDetails) => {
  let userGreeting = "";
  if (userDetails.username) userGreeting = `<li class="user-greeting">Hola, <strong>${userDetails.username}</strong>!</li>`;
  return `<ul>
    ${userGreeting}
    <li><button>Cerrar sesión</button></li>
    <li><a href="./listing-create.html">Crear anuncio</a></li>
  </ul>`;
};

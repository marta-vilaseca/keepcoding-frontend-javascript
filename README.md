# 🛒 Frontend Wallapop

> 👤 Marta Vilaseca Foradada  
> 💻 XVI Bootcamp Full Stack Web  
> 📅 24 Marzo 2024

Desarrollo de una aplicación web similar a Wallapop.

## Importante

- No está permitido el uso de librerías o frameworks de JavaScript
- Sí está permitido el uso de utilidades CSS externas (Bootstrap, Tailwind...)
- Debemos proporcionar un archivo [db.json](db.json) para el backend con datos de ejemplo para la corrección

## Requisitos Funcionales Mínimos

### Listado de anuncios

- [ ] Cada anuncio deberá mostrar:
  - [ ] **Imagen** (si tiene)
  - [ ] **Nombre**
  - [ ] **Descripción**
  - [ ] **Precio**
  - [ ] Si es **compra** o **venta**
- [ ] La pantalla de listado de los anuncios deberá **gestionar todos los estados de la interfaz**:
  - [ ] **Vacío** (no hay anuncios)
  - [ ] **Error** (cuando se produce un error al cargar los anuncios)
  - [ ] **Carga** (mientras se cargan los anuncios desde el backend)
  - [ ] **Éxito** (cuando se han recuperado los anuncios y están listos para ser mostrados)
- [ ] Al pulsar sobre un anuncio iremos a la [pantalla detalle del anuncio](#pantalla-detalle-del-anuncio)
- [ ] **Si el usuario está logado**, hay que mostrarle un botón que le permita ecceder a la pantalla de [creación de un anuncio](#página-de-creación-de-anuncio)

### Pantalla detalle del anuncio

- [ ] Deberá mostrar:
  - [ ] **Imagen** (si tiene)
  - [ ] **Nombre**
  - [ ] **Descripción**
  - [ ] **Precio**
  - [ ] Si es **compra** o **venta**
- [ ] Deberá **gestionar correctamente todos los estados de la interfaz**:
  - [ ] **Vacío** (no existe el anuncio)
  - [ ] **Error** (cuando se produce un error al cargar la info del anuncio)
  - [ ] **Carga** (mientras se cargan la info del anuncio desde el backend)
  - [ ] **Éxito** (cuando se han recuperado la info del anuncio y está listo para ser mostrado)
- [ ] Si el usuario **está autenticado** y **el anuncio le pertenece** deberemos mostrar un **botón que le permita eliminar el anuncio**
  - [ ] **El sistema deberá confirmar con el usuario** si realmente quiere eliminar el anuncio antes de proceder a hacerlo

### Página de creación de anuncio

- [ ] Deberá tener un formulario con los siguientes campos:
  - [ ] **Foto** _(opcional)_
  - [ ] **Nombre** _(obligatorio)_
  - [ ] **Descripción** _(obligatorio)_
  - [ ] **Precio** _(obligatorio)_
  - [ ] **Compra/venta** _(obligatorio)_
- [ ] Cuando el usuario envíe el formulario éste envía una **petición al backend para guardar el anuncio**
- [ ] Debemos **gestionar todos los estados de interfaz correctamente**:
  - [ ] **Error** (cuando se produce un error al guardar la info del anuncio)
  - [ ] **Carga** (mientras se guarda la info del anuncio en el backend)
  - [ ] **Éxito** (cuando se ha guardado la info del anuncio correctamente)
- [ ] A esta pantalla el usuario **sólo podrá acceder si está logado**
  - [ ] En caso contrario, **hay que redireccionarlo a la página de listado de anuncios explicando por qué**

### Login

- [ ] Deberá mostrar un **formulario** solicitando al usuario:
  - [ ] **Nombre de usuario**
  - [ ] **Contraseña**
- [ ] Cuando el usuario envíe el formulario, deberá autenticar el usuario contra el backend para obtener un **token JWT** (que utilizaremos en las siguientes comunicaciones con el backend para autenticar al usuario)
- [ ] Debemos **gestionar todos los estados de interfaz correctamente**:
  - [ ] **Error**
  - [ ] **Carga**
  - [ ] **Éxito**

### Registro

- [ ] Deberá mostrar un **formulario** solicitando al usuario:
  - [ ] **Nombre de usuario**
  - [ ] **Contraseña**
- [ ] Cuando el usuario envíe el formulario, deberá **registrar el usuario en el backend**
- [ ] Debemos **gestionar todos los estados de interfaz correctamente**:
  - [ ] **Error**
  - [ ] **Carga**
  - [ ] **Éxito**

## Requisitos Opcionales

- [ ] Gestionar la **paginación** (por defecto el API sólo devuelve 10 elementos)
- [ ] Implementar un **buscador** de anuncios en el listado
- [ ] Permitir **edición de anuncio**, si el usuario autenticado es el propietario del mismo
- [ ] Permitir **filtrado de los anuncios usando tags**
  - [ ] Para ello en el formulario de anuncios deberán poder **incluirse tags**
  - [ ] Inicialmente estos tags serían estáticos
- [ ] O podemos hacer **que los tags sean dinámicos**

## API REST de apoyo

Estaremos utilizando [sparrest.js](https://github.com/kasappeal/sparrest.js), desarrollada por [@kasappeal](https://www.github.com/kasappeal)

Tras clonar el repositorio y estando dentro del directorio del mismo,

```sh
npm install
npm start
```

Por defecto arrancará en el puerto 8000, por lo que podremos acceder desde [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

### Endpoints

- **Registro de usuario:**
  - `POST /auth/register`
  - Parámetros: username, password
  - Devuelve: si se ha podido registrar al usuario o no
- **Login de usuario:**
  - `POST /auth/login`
  - Parámetros: username, password
  - Devuelve: un token JWT de autenticación
- **Subida de archivos:**
  - `POST /upload`
  - Permite la subida de archivos a través de un atributo _file_ (usando el formato multipart/form-data)
- En `/api` tenemos los **endpoints ofrecidos por [json-server](https://github.com/typicode/json-server)**
  - Los endpoints con métodos `POST`, `PUT` o `DELETE` en cualquiera de las subrutas **necesitan de autenticación** mediante token JWT

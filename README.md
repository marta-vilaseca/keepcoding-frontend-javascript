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

- [x] Cada anuncio deberá mostrar:
  - [x] **Imagen** (si tiene)
  - [x] **Nombre**
  - [x] **Descripción**
  - [x] **Precio**
  - [x] Si es **compra** o **venta**
- [x] La pantalla de listado de los anuncios deberá **gestionar todos los estados de la interfaz**:
  - [x] **Vacío** (no hay anuncios)
  - [x] **Error** (cuando se produce un error al cargar los anuncios)
  - [x] **Carga** (mientras se cargan los anuncios desde el backend)
  - [x] **Éxito** (cuando se han recuperado los anuncios y están listos para ser mostrados)
- [x] Al pulsar sobre un anuncio iremos a la [pantalla detalle del anuncio](#pantalla-detalle-del-anuncio)
- [x] **Si el usuario está logado**, hay que mostrarle un botón que le permita acceder a la pantalla de [creación de un anuncio](#página-de-creación-de-anuncio)

### Pantalla detalle del anuncio

- [x] Deberá mostrar:
  - [x] **Imagen** (si tiene)
  - [x] **Nombre**
  - [x] **Descripción**
  - [x] **Precio**
  - [x] Si es **compra** o **venta**
- [x] Deberá **gestionar correctamente todos los estados de la interfaz**:
  - [x] **Vacío** (no existe el anuncio)
  - [x] **Error** (cuando se produce un error al cargar la info del anuncio)
  - [x] **Carga** (mientras se cargan la info del anuncio desde el backend)
  - [x] **Éxito** (cuando se han recuperado la info del anuncio y está listo para ser mostrado)
- [x] Si el usuario **está autenticado** y **el anuncio le pertenece** deberemos mostrar un **botón que le permita eliminar el anuncio**
  - [x] **El sistema deberá confirmar con el usuario** si realmente quiere eliminar el anuncio antes de proceder a hacerlo
  - [x] **BONUS**: se muestra una notificación tanto si se produce algún error durante el borrado del anuncio como si éste es eliminado correctamente

### Página de creación de anuncio

- [x] Deberá tener un formulario con los siguientes campos:
  - [x] **Foto** _(opcional)_
  - [x] **Nombre** _(obligatorio)_
  - [x] **Descripción** _(obligatorio)_
  - [x] **Precio** _(obligatorio)_
  - [x] **Compra/venta** _(obligatorio)_
- [x] Cuando el usuario envíe el formulario éste envía una **petición al backend para guardar el anuncio**
- [ ] Debemos **gestionar todos los estados de interfaz correctamente**:
  - [x] **Error** (cuando se produce un error al guardar la info del anuncio)
  - [x] **Carga** (mientras se guarda la info del anuncio en el backend)
  - [x] **Éxito** (cuando se ha guardado la info del anuncio correctamente)
- [x] A esta pantalla el usuario **sólo podrá acceder si está logado**
  - [x] En caso contrario, **hay que redireccionarlo a la página de listado de anuncios explicando por qué**

### Login

- [x] Deberá mostrar un **formulario** solicitando al usuario:
  - [x] **Nombre de usuario**
  - [x] **Contraseña**
- [x] Cuando el usuario envíe el formulario, deberá autenticar el usuario contra el backend para obtener un **token JWT** (que utilizaremos en las siguientes comunicaciones con el backend para autenticar al usuario)
- [x] Debemos **gestionar todos los estados de interfaz correctamente**:
  - [x] **Error**
  - [x] **Carga**
  - [x] **Éxito**

### Registro

- [x] Deberá mostrar un **formulario** solicitando al usuario:
  - [x] **Nombre de usuario**
  - [x] **Contraseña**
- [x] Cuando el usuario envíe el formulario, deberá **registrar el usuario en el backend**
- [x] Debemos **gestionar todos los estados de interfaz correctamente**:
  - [x] **Error**
  - [x] **Carga**
  - [x] **Éxito**

## Requisitos Opcionales

- [ ] Gestionar la **paginación** (por defecto el API sólo devuelve 10 elementos)
- [x] Implementar un **buscador** de anuncios en el listado
- [ ] Permitir **edición de anuncio**, si el usuario autenticado es el propietario del mismo
- [x] Permitir **filtrado de los anuncios usando tags**
  - [x] Para ello en el formulario de anuncios deberán poder **incluirse tags**
  - [x] Inicialmente estos tags serían estáticos
- [x] O podemos hacer **que los tags sean dinámicos**

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

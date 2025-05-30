# Clase: Motores de Plantillas con EJS

Este repositorio corresponde a la clase sobre **motores de plantillas** utilizando **EJS** en Node.js, dentro de la Diplomatura Backend de la UNTreF.

## ¿Qué es un motor de plantillas?
Un motor de plantillas permite generar HTML dinámico a partir de datos y plantillas. EJS (Embedded JavaScript) es uno de los motores más populares para Express.

## Objetivo de la clase
- Aprender a integrar EJS en un proyecto Express.
- Renderizar vistas dinámicas con datos.
- Utilizar parciales para reutilizar componentes de interfaz.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd UNTreF-Motor-de-plantillas
   ```
2. Instala las dependencias (usa pnpm, npm o yarn):
   ```bash
   pnpm install
   # o
   npm install
   ```

## Ejecución
Para iniciar el servidor:
```bash
pnpm start
# o
npm start
```
El servidor estará disponible en [http://localhost:3000](http://localhost:3000)

## Estructura del proyecto
```
├── data/                # Datos en formato JSON
├── public/              # Archivos estáticos (CSS, imágenes)
│   └── css/style.css    # Estilos para las vistas
├── views/               # Plantillas EJS
│   ├── include/         # Parciales reutilizables (header, footer)
│   ├── index.html       # Vista principal
│   ├── grid.html        # Vista de personajes
│   └── error.html       # Vista de errores
├── index.js             # Código principal del servidor Express
├── package.json         # Configuración y dependencias
└── readme.md            # Este archivo
```

## Uso de EJS en el proyecto
En `index.js` se configura EJS como motor de plantillas:
```js
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
```

### Ejemplo de plantilla: `views/index.html`
```ejs
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <%- include('include/header.html') %>
    <p>Bienvenido a <%= title %></p>
    <p>Este es el mensaje: <%= message %></p>
    <h2>Productos</h2>
    <ul>
      <% products.forEach(product => { %>
      <li>N°: <%= product.id %></li>
      <li>Nombre:<%= product.name %></li>
      <li>Precio: <%= product.price %></li>
      <li>Descripción: <%= product.description %></li>
      <% }) %>
    </ul>
    <%- include('include/footer.html') %>
  </body>
</html>
```

### Inclusión de parciales
Puedes reutilizar componentes como el header y el footer:
```ejs
<%- include('include/header.html') %>
...
<%- include('include/footer.html') %>
```

### Ejemplo de renderizado de lista
En `views/grid.html` se recorre un array de personajes:
```ejs
<% personajes.forEach(personaje => { %>
  <div class="character-card">
    <img src="<%= personaje.image %>" alt="<%= personaje.name %>" />
    <h3><%= personaje.name %></h3>
    <p><%= personaje.status %></p>
    <p><%= personaje.species %></p>
    <p><%= personaje.type %></p>
  </div>
<% }) %>
```

## Rutas principales
- `/`          → Responde con un saludo simple (HTML plano)
- `/hello`     → Renderiza la vista principal con datos de productos
- `/personajes`→ Renderiza una grilla de personajes usando datos de un JSON

## Archivos estáticos
Los estilos se encuentran en `public/css/style.css` y se aplican automáticamente a las vistas renderizadas.

## Créditos
- Diplomatura Backend UNTreF
- Motor de plantillas: [EJS](https://ejs.co/)
- Framework: [Express](https://expressjs.com/)

---
¡Explora el código, modifica las vistas y experimenta con EJS para crear interfaces dinámicas!

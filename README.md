# Game of Thrones Explorer

![Game of Thrones Explorer](https://game-of-trone.vercel.app/)

Una aplicación web interactiva que te permite explorar el vasto universo de Game of Thrones, incluyendo personajes, casas nobiliarias y libros de la saga "Canción de Hielo y Fuego".

## 📋 Características

- **Página de inicio**: Una bienvenida visual al mundo de Game of Thrones con acceso directo a las secciones principales.
- **Explorador de personajes**: Visualiza y busca entre todos los personajes del universo de Game of Thrones.
- **Casas de Westeros**: Descubre las diferentes casas nobiliarias, sus lemas, blasones y miembros.
- **Biblioteca de libros**: Navega por todos los libros de la saga con información detallada de cada uno.
- **Diseño responsivo**: Experiencia optimizada para dispositivos móviles y de escritorio.
- **Modo oscuro nativo**: Interfaz elegante con tema oscuro para una mejor experiencia visual.

## 🔍 Vista previa

### Página de inicio
![Página de inicio](https://game-of-trone.vercel.app/)

### Explorador de personajes
![Explorador de personajes](https://game-of-trone.vercel.app/characters)

### Casas de Westeros
![Casas de Westeros](https://game-of-trone.vercel.app/houses)

### Biblioteca de libros
![Biblioteca de libros](https://game-of-trone.vercel.app/books)

## 🛠️ Construido con

- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir la interfaz de usuario
- [React Router](https://reactrouter.com/) - Para la navegación entre páginas
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para el diseño
- [An API of Ice And Fire](https://anapioficeandfire.com/) - API para datos de libros y casas
- [ThronesAPI](https://thronesapi.com/) - API para datos de personajes con imágenes

## 📂 Estructura del proyecto

```
src/
├── assets/
│   └── fondoHome.jpg
├── components/
│   ├── CategoryCard.jsx       # Tarjetas de categoría en la página de inicio
│   ├── InfoItem.jsx           # Componente para mostrar información en páginas de detalle
│   └── NavLink.jsx            # Enlaces de navegación personalizados
├── pages/
│   ├── Home.jsx               # Página de inicio
│   ├── Header.jsx             # Cabecera con navegación
│   ├── Footer.jsx             # Pie de página
│   ├── Characters.jsx         # Listado de personajes
│   ├── CharacterDetail.jsx    # Detalle de personaje
│   ├── Houses.jsx             # Listado de casas
│   ├── HouseDetail.jsx        # Detalle de casa
│   ├── Books.jsx              # Listado de libros
│   └── BookDetail.jsx         # Detalle de libro
└── App.js                     # Componente principal y rutas
```

## 📌 Características detalladas

### Explorador de personajes
- Búsqueda de personajes por nombre o título
- Vista de cuadrícula con imágenes de perfil
- Modal de detalles con información completa
- Navegación directa a detalles del personaje

### Casas de Westeros
- Filtrado por nombre y región
- Visualización de lemas, blasones y regiones
- Detalles completos de cada casa
- Lista de miembros juramentados
- Referencias a personajes relacionados (señor actual, heredero, etc.)

### Biblioteca de libros
- Búsqueda por título o autor
- Información completa de cada libro (fecha de publicación, ISBN, editorial)
- Listado de personajes y personajes POV
- Paginación para navegar entre resultados

## 🚀 Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/katherine-j-c-s/Game_Of_Trone.git
   cd game-of-thrones-explorer
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🔧 Configuración para producción

Para compilar la aplicación para producción:

```bash
npm run build
```

Los archivos compilados se guardarán en la carpeta `build/`.

## 📱 Compatibilidad

La aplicación es totalmente responsiva y funciona en:
- 🖥️ Navegadores de escritorio modernos (Chrome, Firefox, Safari, Edge)
- 📱 Dispositivos móviles y tablets
- 🌓 Soporta modo oscuro automático basado en la configuración del sistema

## 📊 APIs utilizadas

### [An API of Ice And Fire](https://anapioficeandfire.com/)
- Proporciona datos detallados de libros y casas nobiliarias
- Endpoints utilizados:
  - `/api/books` - Listado de libros
  - `/api/books/{id}` - Detalle de libro
  - `/api/houses` - Listado de casas
  - `/api/houses/{id}` - Detalle de casa

### [ThronesAPI](https://thronesapi.com/)
- Proporciona datos e imágenes de personajes
- Endpoints utilizados:
  - `/api/v2/Characters` - Listado de personajes
  - `/api/v2/Characters/{id}` - Detalle de personaje

---

⌨️ con ❤️ por [Katherine Contreras](https://github.com/katherine-j-c-s) 😊
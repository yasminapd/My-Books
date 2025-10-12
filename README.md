# My Books 📚

Una aplicación completa de gestión de libros con operaciones CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada con Node.js en el backend e Ionic Angular en el frontend.

## 🚀 Características

- ✅ **Listar libros** - Ver todos los libros disponibles
- ✅ **Añadir libros** - Crear nuevos libros con título y autor
- ✅ **Editar libros** - Actualizar información de libros existentes
- ✅ **Eliminar libros** - Borrar libros con confirmación
- ✅ **Navegación intuitiva** - Interfaz móvil-first con Ionic
- ✅ **Validaciones de formularios** - Formularios reactivos con validaciones en tiempo real
- ✅ **API RESTful** - Backend robusto con Express y Sequelize

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework web minimalista
- **Sequelize** - ORM para JavaScript
- **MySQL** - Base de datos relacional

### Frontend  
- **Ionic** - Framework para aplicaciones móviles híbridas
- **Angular** - Framework de desarrollo web
- **TypeScript** - Superset tipado de JavaScript
- **Reactive Forms** - Manejo de formularios reactivos

## 📁 Estructura del Proyecto

```
My-Books/
├── backend/
│   ├── config/
│   │   └── db.config.js
│   ├── controllers/
│   │   └── book.controller.js
│   ├── models/
│   │   ├── index.js
│   │   └── book.model.js
│   ├── routes/
│   │   └── book.routes.js
│   ├── package.json
│   └── index.js
└── fronted/
    ├── src/
    │   ├── app/
    │   │   ├── home/
    │   │   ├── my-books/
    │   │   ├── add-book/
    │   │   ├── edit-book/
    │   │   └── services/
    │   └── ...
    ├── package.json
    └── ...
```

## 🔧 Instalación y Configuración

### Prerequisitos
- Node.js (v14 o superior)
- MySQL Server
- Ionic CLI (`npm install -g @ionic/cli`)

### Backend

1. **Navegar a la carpeta backend**
   ```bash
   cd backend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar la base de datos**
   - Crear una base de datos MySQL llamada `db_books`
   - Configurar las credenciales en `config/db.config.js`

4. **Ejecutar el servidor**
   ```bash
   node index.js
   ```
   El servidor estará disponible en `http://localhost:8080`

### Frontend

1. **Navegar a la carpeta frontend**
   ```bash
   cd fronted
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**
   ```bash
   ionic serve
   ```
   La aplicación estará disponible en `http://localhost:8100`

## 🌐 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/books` | Obtener todos los libros |
| GET | `/api/books/:id` | Obtener un libro por ID |
| POST | `/api/books` | Crear un nuevo libro |
| PUT | `/api/books/:id` | Actualizar un libro |
| DELETE | `/api/books/:id` | Eliminar un libro |

### Ejemplo de uso de la API

**Crear un libro:**
```bash
curl -X POST http://localhost:8080/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "El Quijote", "author": "Miguel de Cervantes"}'
```

**Obtener todos los libros:**
```bash
curl http://localhost:8080/api/books
```

### 📋 Postman Collection
Para facilitar las pruebas de la API, puedes usar nuestra colección de Postman que incluye todos los endpoints configurados:

**[📎 Ver Collection de Postman](https://documenter.getpostman.com/view/48949757/2sB3QMKUGM)**

La colección incluye ejemplos de todas las operaciones CRUD con datos de prueba.

## 📱 Páginas de la Aplicación

### 🏠 Home
- Página principal con navegación a las funciones principales

### 📖 My Books  
- Lista de todos los libros
- Botones para editar y eliminar cada libro
- Navegación a formulario de añadir libro

### ➕ Add Book
- Formulario para crear nuevos libros
- Validaciones en tiempo real
- Campos: Título (min. 3 caracteres) y Autor (min. 2 caracteres)

### ✏️ Edit Book
- Formulario para editar libros existentes
- Campos pre-llenados con información actual
- Mismas validaciones que el formulario de creación

## 🎯 Funcionalidades Destacadas

- **Formularios reactivos** con validaciones personalizadas
- **Navegación fluida** entre páginas
- **Confirmaciones** antes de eliminar libros
- **Actualización automática** de listas después de operaciones CRUD
- **Interfaz responsive** optimizada para móviles
- **Manejo de errores** en frontend y backend

## 🚀 Próximas Mejoras

- [ ] Autenticación de usuarios
- [ ] Categorías de libros
- [ ] Búsqueda y filtros
- [ ] Imágenes de portadas
- [ ] Calificaciones y reseñas
- [ ] Exportar lista de libros

## 👨‍💻 Autor

**Yasmina** - [@yasminapd](https://github.com/yasminapd)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ Si te gustó este proyecto, ¡no olvides darle una estrella!
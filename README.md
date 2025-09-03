# 💼 App Freelancers - Fullstack Angular 17 + Node.js + MySQL

Proyecto de gestión de clientes y tareas para trabajos freelancer. Desarrollado en 7 días, con arquitectura moderna, componentes standalone, autenticación con JWT, y base de datos relacional.

## 🛠️ Stack Tecnológico

| Tecnología        | Uso                          |
|-------------------|-------------------------------|
| Angular 17        | Frontend standalone           |
| Node.js + Express | Backend REST API              |
| MySQL + Sequelize | Base de datos relacional      |
| Tailwind CSS      | Estilos utilitarios           |
| JWT               | Autenticación segura          |
| Railway / Render  | Hosting backend               |
| Vercel / Netlify  | Hosting frontend              |

---

```yaml
app-freelancers/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/         
│   │   │   ├── pages/              
│   │   │   ├── services/           
│   │   │   ├── guards/            
│   │   │   ├── interceptors/      
│   │   │   ├── app.routes.ts
│   │   └── environments/           
│   └── main.ts
│
├── backend/
│   ├── src/
│   │   ├── controllers/            
│   │   ├── models/                 
│   │   ├── routes/                
│   │   ├── config/            
│   │   ├── middleware/            
│   │   └── server.js
│   └── .env
```
---

## ✅ Funcionalidades Implementadas

### 🔐 Autenticación
- Registro y login usando JWT.
- Hash de contraseñas con bcrypt.
- Middleware de autenticación para proteger rutas.
- Tokens guardados en `localStorage`.
- Guards de rutas privadas con Angular Signals.

### 👥 Clientes
- CRUD completo de clientes por usuario.
- Validaciones en formulario.
- Interfaz responsive con Tailwind.

### 📋 Tareas por Cliente
- CRUD de tareas asociadas a cada cliente.
- Estado de completado, validaciones, modal de edición.
- Relación entre Cliente ↔️ Tareas implementada con Sequelize.

### 👤 Perfil
- Modal de edición de perfil.
- Cambio de contraseña con validación.
- UX profesional: popup dinámico, campos reactivos.

### 💅 UI/UX
- Tailwind CSS para estilos limpios.
- Heroicons para íconos.
- Componentes standalone reutilizables.
- Animaciones suaves y navegación protegida.

---

| Método | Endpoint                            | Descripción                 |
| ------ | ----------------------------------- | --------------------------- |
| POST   | /api/usuarios/registro              | Registro de usuario         |
| POST   | /api/usuarios/login                 | Login y generación de JWT   |
| GET    | /api/clientes                       | Listado de clientes         |
| POST   | /api/clientes                       | Crear nuevo cliente         |
| PUT    | /api/clientes/\:id                  | Actualizar cliente          |
| DELETE | /api/clientes/\:id                  | Eliminar cliente            |
| GET    | /api/clientes/\:id/tareas           | Listar tareas de un cliente |
| POST   | /api/clientes/\:id/tareas           | Crear tarea                 |
| PUT    | /api/clientes/\:id/tareas/\:idTarea | Editar tarea                |
| DELETE | /api/clientes/\:id/tareas/\:idTarea | Eliminar tarea              |
| GET    | /api/usuarios/perfil                | Obtener perfil del usuario  |
| PUT    | /api/usuarios/perfil                | Actualizar nombre/email     |
| PUT    | /api/usuarios/cambiar-password      | Cambiar contraseña          |

---

🧪 Testing y Calidad

Validaciones de formularios.

Pruebas manuales con Postman.

JWT probado desde frontend y backend.

Componentes desacoplados y reutilizables.

Interceptor HTTP para adjuntar token automáticamente.

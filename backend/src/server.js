const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');

// Importar modelos (esto también configura las relaciones)
const Usuario = require('./models/usuario.model');
const Cliente = require('./models/cliente.model');
const Tarea = require('./models/tarea.model');

// Importar rutas
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares
app.use(cors()); // ✅ Permite conexiones entre frontend y backend
app.use(express.json());

// Rutas
app.use('/api/usuarios', authRoutes);

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('API Freelancers funcionando ✅');
});

// Puerto desde .env
const PORT = process.env.PORT || 3000;

// Conexión y sincronización con DB
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a MySQL exitosa con Sequelize');
    return sequelize.sync(); // Crear tablas si no existen
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar con la base de datos:', err);
  });

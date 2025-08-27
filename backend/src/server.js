const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const clienteRoutes = require('./routes/clienteRoutes');
const tareaRoutes = require('./routes/tareaRoutes'); // ✅ Asegúrate de tener esto

// Importar modelos
const Usuario = require('./models/usuario.model');
const Cliente = require('./models/cliente.model');
const Tarea = require('./models/tarea.model');

// Importar rutas
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api/usuarios', authRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/clientes/:clienteId/tareas', tareaRoutes);


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Freelancers funcionando ✅');
});

// Puerto
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a MySQL exitosa con Sequelize');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar con la base de datos:', err);
  });

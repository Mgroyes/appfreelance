const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');


const Usuario = require('./models/usuario.model');
const Cliente = require('./models/cliente.model');
const Tarea = require('./models/tarea.model');


const authRoutes = require('./routes/authRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const tareaRoutes = require('./routes/tareaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes'); 

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/usuarios', authRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/clientes/:clienteId/tareas', tareaRoutes);
app.use('/api/usuario', usuarioRoutes); 


app.get('/', (req, res) => {
  res.send('API Freelancers funcionando ✅');
});


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

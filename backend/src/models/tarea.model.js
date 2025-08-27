const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente.model');

const Tarea = sequelize.define('Tarea', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  completado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'tareas',
  timestamps: true,
  createdAt: 'creado_en',
  updatedAt: false
});

Tarea.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Cliente.hasMany(Tarea, { foreignKey: 'cliente_id' });

module.exports = Tarea;

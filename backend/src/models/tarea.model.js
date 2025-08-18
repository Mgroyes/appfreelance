const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente.model');

const Tarea = sequelize.define('Tarea', {
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  completado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  creado_en: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'tareas',
  timestamps: false,
});

Cliente.hasMany(Tarea, { foreignKey: 'cliente_id' });
Tarea.belongsTo(Cliente, { foreignKey: 'cliente_id' });

module.exports = Tarea;

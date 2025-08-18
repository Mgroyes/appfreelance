const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario.model');

const Cliente = sequelize.define('Cliente', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  empresa: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  estado: {
    type: DataTypes.ENUM('potencial', 'activo', 'cerrado'),
    defaultValue: 'potencial',
  },
  creado_en: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'clientes',
  timestamps: false,
});

Usuario.hasMany(Cliente, { foreignKey: 'usuario_id' });
Cliente.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Cliente;

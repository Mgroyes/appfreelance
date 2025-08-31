const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');

// Obtener perfil
exports.obtenerPerfil = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, {
      attributes: ['id', 'nombre', 'email', 'creado_en']
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el perfil' });
  }
};

// Editar perfil
exports.editarPerfil = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id);

    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    usuario.nombre = req.body.nombre || usuario.nombre;
    usuario.email = req.body.email || usuario.email;
    await usuario.save();

    res.json({ message: 'Perfil actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al editar el perfil' });
  }
};

// Cambiar contraseña
exports.cambiarPassword = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id);
    const { actual, nueva } = req.body;

    const coincide = await bcrypt.compare(actual, usuario.password);
    if (!coincide) {
      return res.status(400).json({ error: 'La contraseña actual no es correcta' });
    }

    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(nueva, salt);
    await usuario.save();

    res.json({ message: 'Contraseña cambiada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar la contraseña' });
  }
};

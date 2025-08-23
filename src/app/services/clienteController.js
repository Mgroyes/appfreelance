// backend/src/controllers/clienteController.js
const Cliente = require('../models/cliente.model');

exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({ where: { usuario_id: req.usuario.id } });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

exports.crearCliente = async (req, res) => {
  try {
    const nuevoCliente = await Cliente.create({
      ...req.body,
      usuario_id: req.usuario.id,
    });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};

exports.actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id: req.params.id, usuario_id: req.usuario.id },
    });

    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    await cliente.update(req.body);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar cliente' });
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id: req.params.id, usuario_id: req.usuario.id },
    });

    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    await cliente.destroy();
    res.json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
};

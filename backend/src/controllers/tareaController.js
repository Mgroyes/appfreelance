const Tarea = require('../models/tarea.model');
const Cliente = require('../models/cliente.model');

exports.obtenerTareas = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id: req.params.clienteId, usuario_id: req.usuario.id }
    });

    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    const tareas = await Tarea.findAll({ where: { cliente_id: cliente.id } });
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
};

exports.crearTarea = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id: req.params.clienteId, usuario_id: req.usuario.id }
    });

    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    const tarea = await Tarea.create({
      ...req.body,
      cliente_id: cliente.id
    });

    res.status(201).json(tarea);
  } catch (error) {
    console.error('❌ Error al crear tarea:', error); // 👈 Esto es clave
    res.status(500).json({ error: 'Error al crear tarea' });
  }
};



exports.actualizarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findOne({
      where: {
        id: req.params.idTarea,
        cliente_id: req.params.clienteId
      }
    });

    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

    await tarea.update(req.body);
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar tarea' });
  }
};

exports.eliminarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findOne({
      where: {
        id: req.params.idTarea,
        cliente_id: req.params.clienteId
      }
    });

    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

    await tarea.destroy();
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
};

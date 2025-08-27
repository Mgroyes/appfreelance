// backend/src/routes/tareaRoutes.js
const express = require('express');
const router = express.Router({ mergeParams: true });

const tareaController = require('../controllers/tareaController');
const authMiddleware = require('../middleware/authMiddleware');

// Todas protegidas
router.use(authMiddleware);

router.get('/', tareaController.obtenerTareas);
router.post('/', tareaController.crearTarea);
router.put('/:idTarea', tareaController.actualizarTarea);
router.delete('/:idTarea', tareaController.eliminarTarea);

module.exports = router;


const express = require('express');
const router = express.Router({ mergeParams: true });

const tareaController = require('../controllers/tareaController');
const authMiddleware = require('../middleware/authMiddleware');


router.use(authMiddleware);

router.get('/', tareaController.obtenerTareas);
router.post('/', tareaController.crearTarea);
router.put('/:idTarea', tareaController.actualizarTarea);
router.delete('/:idTarea', tareaController.eliminarTarea);

module.exports = router;

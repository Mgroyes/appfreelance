const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/perfil', usuarioController.obtenerPerfil);
router.put('/perfil', usuarioController.editarPerfil);
router.put('/password', usuarioController.cambiarPassword);

module.exports = router;

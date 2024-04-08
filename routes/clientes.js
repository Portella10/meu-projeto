const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.getTodosClientes);
// Implemente os demais endpoints conforme necessário

module.exports = router;

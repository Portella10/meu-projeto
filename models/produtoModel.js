const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.getTodosProdutos);
// Implemente os demais endpoints conforme necessário

module.exports = router;

// Exemplo de definição dos endpoints relacionados a produtos
const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Endpoint para obter todos os produtos
router.get('/', produtosController.getAllProdutos);

// Outros endpoints relacionados a produtos...

module.exports = router;

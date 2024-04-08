const produtosModel = require('../models/produtosModel');

exports.getTodosProdutos = async () => {
  return await produtosModel.getTodosProdutos();
};

// Implemente os demais métodos conforme necessário (criarProduto, atualizarProduto, deletarProduto)

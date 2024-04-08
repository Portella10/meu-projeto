const produtosService = require('../services/produtosService');

exports.getTodosProdutos = async (req, res) => {
  try {
    const produtos = await produtosService.getTodosProdutos();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Implemente os demais métodos conforme necessário (criarProduto, atualizarProduto, deletarProduto)

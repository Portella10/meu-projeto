const clientesService = require('../services/clientesService');

exports.getTodosClientes = async (req, res) => {
  try {
    const clientes = await clientesService.getTodosClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Implemente os demais métodos conforme necessário (criarCliente, atualizarCliente, deletarCliente)

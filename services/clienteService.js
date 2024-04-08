const clientesModel = require('../models/clientesModel');

exports.getTodosClientes = async () => {
  return await clientesModel.getTodosClientes();
};

// Implemente os demais métodos conforme necessário (criarCliente, atualizarCliente, deletarCliente)

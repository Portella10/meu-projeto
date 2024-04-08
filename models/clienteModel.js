const db = require('../configs/db');

exports.getTodosClientes = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM clientes', (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

// Implemente os demais métodos conforme necessário (criarCliente, atualizarCliente, deletarCliente)

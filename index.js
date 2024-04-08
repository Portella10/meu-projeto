const express = require('express');
const dotenv = require('dotenv');
const clientesRoutes = require('./routes/clientesRoutes');
const produtosRoutes = require('./routes/produtosRoutes');

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Define as rotas para clientes e produtos
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha aplicação Node.js!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

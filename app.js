// app.js
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const httpErrors = require('http-errors');
const clientesRoutes = require('./routes/clientesRoutes');
const produtosRoutes = require('./routes/produtosRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

// Rota padrão
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rotas
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

// Captura 404 e encaminha para o manipulador de erros
app.use((req, res, next) => {
    next(httpErrors(404));
});

// Manipulador de erros
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

module.exports = app;

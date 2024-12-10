const express = require('express');
const musicRoutes = require('./routes/musicRoutes');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos e parsear JSON
app.use(express.static('views'));
app.use(express.json());
app.use('/', musicRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

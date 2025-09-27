import 'dotenv/config';
import express from 'express';

// Importe suas rotas
import authRoutes from './router/authroutes.js';
import extratoRoutes from './router/extrato.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Registre suas rotas
app.use(authRoutes);
app.use(extratoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importa suas rotas separadas
import UserRouter from './src/router/UserRouter.js';
import EventoRouter from './src/router/EventoRouter.js';
import EnderecoRouter from './src/router/EnderecoRouter.js';
import ExtratoRouter from './src/router/ExtratoRouter.js';
import RegistroRouter from './src/router/RegistroRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/user', UserRouter);
app.use('/evento', EventoRouter);
app.use('/endereco', EnderecoRouter);
app.use('/extrato', ExtratoRouter);
app.use('/registro', RegistroRouter);

// Rota raiz
app.get('/', (req, res) => {
    res.json({ message: 'API rodando com Express + Prisma + MVC 🚀✨' });
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

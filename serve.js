import express from 'express';
import cors from 'cors';

import UserRouter from './src/router/UserRouter.js';
import EventoRouter from './src/router/EventoRouter.js';
import EnderecoRouter from './src/router/EnderecoRouter.js';
import RegistroRouter from './src/router/RegistroRouter.js';
import ExtratoRouter from './src/router/ExtratoRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas principais
app.use('/users', UserRouter);
app.use('/eventos', EventoRouter);
app.use('/enderecos', EnderecoRouter);
app.use('/registros', RegistroRouter);
app.use('/extratos', ExtratoRouter);

// Rota inicial
app.get('/', (req, res) => {
    res.json({ message: 'API rodando com Express + Prisma + MVC 🚀✨' });
});

// Subindo servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

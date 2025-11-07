import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server as socketIo } from 'socket.io';
import UserRouter from './src/router/UserRouter.js';
import EventoRouter from './src/router/EventoRouter.js';
import EnderecoRouter from './src/router/EnderecoRouter.js';
import ExtratoRouter from './src/router/ExtratoRouter.js';
import RegistroRouter from './src/router/RegistroRouter.js';


dotenv.config();
const app = express();
const server = http.createServer(app);
const Io = new socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    },
});
Io.on('connection', (socket) => {
    console.log('novo cliente conectado:', socket.id);
});
export { Io, app };



const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());


app.use('/user', UserRouter);
app.use('/evento', EventoRouter);
app.use('/endereco', EnderecoRouter);
app.use('/extrato', ExtratoRouter);
app.use('/registro', RegistroRouter);


app.get('/', (req, res) => {
    res.json({ message: 'API rodando com Express + Prisma + MVC 🚀✨' });
});


server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
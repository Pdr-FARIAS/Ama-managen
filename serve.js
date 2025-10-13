import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("PORT:", process.env.PORT)
console.log("url bb", process.env.URLBB);

// Rotas principais


// Rota inicial
app.get('/', (req, res) => {
    res.json({ message: 'API rodando com Express + Prisma + MVC 🚀✨' });
});

// Subindo servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

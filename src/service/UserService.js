// src/service/UserService.js
import prisma from '../config/prismaClient.js';
import axios from 'axios'
import { UserError } from "../error/UserError.js"
import validation from "../utils/Validation.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



class UserService {

    async RegistrarUser(body) {
        validation.vadatePasswordandEmail(body.email, body.password);
        validation.isValidadeAgenciaConta(body.numero_conta, body.agencia_conta);
        await this.verifyUserAlreadyExist(body.email, null);
        const encryptPass = await bcrypt.hash(body.password, 10);
        return await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: encryptPass,
                numero_conta: body.numero_conta,
                agencia_conta: body.agencia_conta,

            },
        });

    }

    async updateUser(id, name, email, password) {
        await this.findById(id)
        validation.vadatePasswordandEmail(email, password);
        await this.verifyUserAlreadyExist(email, id);

        if (!password) {
            return await prisma.user.update({
                where: { id },
                data: {
                    name: name,
                    email: email
                },
            });
        } else {
            const encryptPass = await bcrypt.hash(password, 10);
            return await prisma.user.update({
                where: { id },
                data: {
                    name: name,
                    email: email,
                    password: encryptPass,
                },
            });
        }
    }

    async deleteUser(id) {
        await findById(id);
        await prisma.user.delete({
            where: { id },
        });
    }
    async login(email, password) {
        const user = await this.findByEmail(email);
        const isValidatedPassword = await bcrypt.compare(password, user.password);
        if (!isValidatedPassword) {
            throw new UserError("a senha esta incorreta!", 400);
        }
        return jwt.sign(
            {
                userId: user.id,
                email: user.email,

            },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );
    }

    async verifyUserAlreadyExist(email, id) {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (user && (id == null || id != user)) {
            throw new UserError("Email já cadastrado!", 400);
        }
    }
    async findByEmail(email) {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new UserError("Usuário não cadastrado!", 400);
        }
        return user;
    }

    async findById(id) {
        const user = await prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new UserError("Usuário não encontrado!", 404);
        }
        return user;
    }

    async SolicitarToken() {
        const url = process.env.URLBB;
        const clientId = process.env.BB_CLIENT_ID;
        const secret = process.env.BB_CLIENT_SECRET;
        const basicAuth = Buffer.from(`${clientId}:${secret}`).toString('base64');
        const token = null;
        const tokenespirado = null;
        try {
            const response = await axios.post(
                url, 'grant_type=client_credentials',
                {
                    headers: {
                        'Authorization': `Basic ${basicAuth}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }
            );
            token = response.data.access_token;
            var expiresIn = response.data.expiresIn;
            tokenespirado = Date.now() + expiresIn * 1000;

            return response.data.access_token;
        } catch (error) {
            console.error("Erro ao solicitar token do BB:", error.response?.data || error.message);
            throw new UserError("Erro ao solicitar token com o Banco do Brasil", 500);

        }
    }
    async getContaInfo(userId) {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) throw new UserError("Usuário não encontrado", 404);

        return {
            agencia: user.agencia_conta,
            conta: user.numero_conta
        };
    }
}


export default new UserService();
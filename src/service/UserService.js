// src/service/UserService.js
import prisma from '../config/prismaClient.js';
import axios from 'axios'
import { UserError } from "../error/Error.js"
import validation from "../utils/Validation.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



class UserService {




    async RegistrarUser(body) {
        validation.validatePasswordAndEmail(body.email, body.password);
        await validation.isValidadeAgenciaConta(body.agencia_conta, body.numero_conta);
        await validation.verifyUserAlreadyExist(
            body.email,
            body.numero_conta,
            body.agencia_conta,
            null
        );
        const encryptPass = await bcrypt.hash(body.password, 10);
        return await prisma.user.create({
            data: {
                user: body.name,
                email: body.email,
                password: encryptPass,
                numero_conta: body.numero_conta,
                agencia_conta: body.agencia_conta,
                role: "ADMIN",
            },
        });
    }

    async updateUser(userid, name, email, password, numero_conta, agencia_conta) {
        await this.findById(userid);
        validation.validatePasswordAndEmail(email, password);
        await validation.verifyUserAlreadyExist(
            email,
            numero_conta,
            agencia_conta,
            userid
        );

        const dataToUpdate = {
            user: name,
            email,
            numero_conta,
            agencia_conta,
        };

        if (password) {
            dataToUpdate.password = await bcrypt.hash(password, 10);
        }

        return await prisma.user.update({
            where: { userid },
            data: dataToUpdate,
        });
    }
    async deleteUser(userid) {
        const user = await this.findById(userid);
        if (!user) throw new UserError("Usuário não encontrado!", 404);

        await prisma.user.delete({ where: { userid } });

        return { message: "Usuário deletado com sucesso!" };
    }

    async login(email, password) {
        const user = await this.findByEmail(email);
        const isValidatedPassword = await bcrypt.compare(password, user.password);

        if (!isValidatedPassword) {
            throw new UserError("A senha está incorreta!", 400);
        }

        // gera o token com userid e email
        return jwt.sign(
            {
                userId: user.userid,
                email: user.email,
                role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );
    }

    // 🔹 Buscar usuário por email
    async findByEmail(email) {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new UserError("Usuário não cadastrado!", 400);
        }
        return user;
    }

    // 🔹 Buscar usuário por ID
    async findById(userid) {
        const user = await prisma.user.findUnique({
            where: { userid },
        });
        if (!user) {
            throw new UserError("Usuário não encontrado!", 404);
        }
        return user;
    }

    // 🔹 Solicitar token (Banco do Brasil)
    async SolicitarToken() {
        const url = process.env.URLBB;
        const clientId = process.env.BB_CLIENT_ID;
        const secret = process.env.BB_CLIENT_SECRET;
        const basicAuth = Buffer.from(`${clientId}:${secret}`).toString('base64');

        try {
            const response = await axios.post(
                url,
                'grant_type=client_credentials',
                {
                    headers: {
                        'Authorization': `Basic ${basicAuth}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            return response.data.access_token;
        } catch (error) {
            console.error("Erro ao solicitar token do BB:", error.response?.data || error.message);
            throw new UserError("Erro ao solicitar token com o Banco do Brasil", 500);
        }
    }

    // 🔹 Retorna dados de conta do usuário
    async getContaInfo(userid) {
        const user = await prisma.user.findUnique({
            where: { userid },
        });

        if (!user) throw new UserError("Usuário não encontrado", 404);

        return {
            agencia: user.agencia_conta,
            conta: user.numero_conta,
        };
    }
    async getAllUsers() {
        const users = await prisma.user.findMany({
            select: {
                userid: true,
                user: true,
                email: true,
                numero_conta: true,
                agencia_conta: true,
            },
        });

        if (!users || users.length === 0) {
            throw new UserError("Nenhum usuário encontrado!", 404);
        }

        return users;
    }


}



export default new UserService();
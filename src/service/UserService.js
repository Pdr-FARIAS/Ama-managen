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

    async updateUser(userId, payload) {
        const dataToUpdate = {};
        if (payload.user || payload.name) {
            dataToUpdate.user = payload.user || payload.name;
        }

        if (payload.email) {
            dataToUpdate.email = payload.email;
        }

        if (payload.password) {
            dataToUpdate.password = await bcrypt.hash(payload.password, 10);
        }

        if (payload.agencia_conta) {
            dataToUpdate.agencia_conta = payload.agencia_conta;
        }

        if (payload.numero_conta) {
            dataToUpdate.numero_conta = payload.numero_conta;
        }

        if (Object.keys(dataToUpdate).length === 0) {
            throw new UserError("Nenhum campo válido fornecido para atualização.", 400);
        }

        console.log("[PRISMA UPDATE] User ID:", userId);
        console.log("   Payload de Atualização (data):", dataToUpdate);

        const updatedResult = await prisma.user.update({
            where: { userid: Number(userId) },
            data: dataToUpdate,
            select: {
                userid: true,
                user: true,
                email: true,
                agencia_conta: true,
                numero_conta: true,
                role: true
            }
        });

        return {
            id: updatedResult.userid,
            name: updatedResult.user,
            email: updatedResult.email,
            agencia_conta: updatedResult.agencia_conta,
            numero_conta: updatedResult.numero_conta,
            role: updatedResult.role
        };
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


        const token = jwt.sign(
            {
                userId: user.userid,
                email: user.email,
                role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );
        return {
            token,
            user: {
                userId: user.userid,
                name: user.user,
                email: user.email,
                role: user.role,
                agencia_conta: user.agencia_conta,
                numero_conta: user.numero_conta
            }
        };
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


    async findById(userId) {
        const user = await prisma.user.findUnique({
            where: { userid: Number(userId) },
            select: {
                userid: true,
                user: true,
                email: true,
                agencia_conta: true,
                numero_conta: true,
                role: true
            }
        });

        return user;
    }


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
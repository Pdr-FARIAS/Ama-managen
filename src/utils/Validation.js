import { UserError, EventoError, EnderecoError, RegisterError } from "../error/Error.js";
import prisma from "../config/prismaClient.js";

class Validation {

    validatePasswordAndEmail(email, password) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            throw new UserError("O email é inválido!", 400);
        }

        if (password) {
            const passwordPattern =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()[\]{}<>#^~+=_.,:;|\\\/-])[A-Za-z\d@$!%*?&()[\]{}<>#^~+=_.,:;|\\\/-]{8,}$/;

            if (!passwordPattern.test(password)) {
                throw new UserError(
                    "A senha deve ter no mínimo 8 caracteres, incluindo ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!",
                    400
                );
            }
        }
    }

    async isValidadeAgenciaConta(agencia, conta) {
        const agenciaLimpa = String(agencia).replace(/\D/g, '');
        const contaLimpa = String(conta).replace(/\D/g, '');

        if (!agenciaLimpa || !contaLimpa) {
            throw new UserError('Agência e conta são obrigatórias.', 400);
        }

        if (agenciaLimpa.length !== 4) {
            throw new UserError('A agência deve ter 4 dígitos.', 400);
        }

        if (contaLimpa.length < 5 || contaLimpa.length > 10) {
            throw new UserError('A conta deve ter entre 5 e 10 dígitos.', 400);
        }

        if (isNaN(agenciaLimpa) || isNaN(contaLimpa)) {
            throw new UserError('Agência e conta devem conter apenas números.', 400);
        }

        await new Promise(resolve => setTimeout(resolve, 100));

        return true;
    }


    async verifyUserAlreadyExist(email, numero_conta = null, agencia_conta = null, id = null) {

        if (email) {
            const existingEmail = await prisma.user.findUnique({
                where: { email },
            });
            if (existingEmail && (id === null || existingEmail.userid !== id)) {
                throw new UserError("Usuário já cadastrado com este email.", 409);
            }
        }


        if (numero_conta && agencia_conta) {
            const existingConta = await prisma.user.findFirst({
                where: { numero_conta, agencia_conta },
            });
            if (existingConta && (id === null || existingConta.userid !== id)) {
                throw new UserError("Esta conta bancária já está associada a outro usuário.", 409);
            }
        }
    }


    async verifyEventoAlreadyExist(titulo, criadorid) {
        const evento = await prisma.criar_evento.findFirst({
            where: { titulo, criadorid },
        });
        if (evento) {
            throw new EventoError("Já existe um evento com este título para este criador.", 409);
        }
    }

    async verifyRegistroAlreadyExist(name, userId) {
        const registro = await prisma.registo_evento.findFirst({
            where: { name, register_id: userId },
        });
        if (registro) {
            throw new RegisterError("Registro já existente com este nome!", 409);
        }
    }


    async verifyEnderecoAlreadyExist(body) {
        const endereco = await prisma.endereço.findFirst({
            where: {
                lote: body.lote,
                numero: body.numero,
                quadra: body.quadra,
                bairro: body.bairro,
            },
        });

        if (endereco) {
            throw new EnderecoError("Endereço já cadastrado com esses dados.", 409);
        }
    }

    validateDateRange(dataInicio, dataFim) {
        const regex = /^\d{4}-\d{2}-\d{2}$/;

        if (!regex.test(dataInicio) || !regex.test(dataFim)) {
            throw new Error("As datas devem estar no formato YYYY-MM-DD.");
        }

        const inicio = new Date(dataInicio);
        const fim = new Date(dataFim);

        if (inicio > fim) {
            throw new Error("A data de início não pode ser posterior à data de fim.");
        }
    }
}

export const verifyUserAlreadyExist = async (req, res, next) => {
    try {
        const { email, numero_conta, agencia_conta } = req.body;
        await new Validation().verifyUserAlreadyExist(email, numero_conta, agencia_conta);
        next();
    } catch (err) {
        console.error("Erro ao verificar usuário existente:", err);
        res.status(err.statusCode || 500).json({ error: err.message || "Erro interno ao verificar usuário." });
    }
};

export function parseDateInt(dateStr) {
    if (!dateStr) return null;
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return new Date(`${year}-${month}-${day}`);
}

export default new Validation();

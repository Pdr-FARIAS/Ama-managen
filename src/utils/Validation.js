import { UserError, EventoError, EnderecoError, RegistroError } from "../error/Error.js";
import prisma from "../config/prismaClient.js";

/**
 * Classe de validações gerais e regras de negócio.
 * Deve ser chamada antes dos schemas Zod (ex: no middleware de validação).
 */
class Validation {
    // 🔹 Verifica formato de e-mail e força de senha
    validatePasswordAndEmail(email, password) {
        const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!emailPattern.test(email)) {
            throw new UserError("O email é inválido!", 400);
        }

        if (password) {
            const passwordPattern =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()[\]{}<>#^~+=_.,:;|\\\/-])[A-Za-z\d@$!%*?&()[\]{}<>#^~+=_.,:;|\\\/-]{8,}$/;

            if (!passwordPattern.test(password)) {
                throw new UserError(
                    "A senha deve ter no mínimo 8 caracteres sendo ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!",
                    400
                );
            }
        }
    }

    // 🔹 Verifica se usuário já existe
    async verifyUserAlreadyExist(email) {
        if (!email) {
            throw new UserError("O email é obrigatório para esta verificação.", 400);
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new UserError("Usuário já cadastrado com este email.", 409);
        }
    }

    // 🔹 Verifica duplicidade de evento
    async verifyEventoAlreadyExist(titulo, criadorid) {
        const evento = await prisma.criar_evento.findFirst({
            where: { titulo, criadorid },
        });

        if (evento) {
            throw new EventoError("Já existe um evento com este título para este criador.", 409);
        }
    }

    // 🔹 Verifica duplicidade de registro
    async verifyRegistroAlreadyExist(name, userId) {
        const registro = await prisma.registo_evento.findFirst({
            where: { name, register_id: userId },
        });

        if (registro) {
            throw new RegistroError("Registro já existente com este nome!", 409);
        }
    }

    // 🔹 Verifica duplicidade de endereço
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

    // 🔹 Valida formato e coerência de datas
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

/**
 * Middleware para uso direto nas rotas.
 */
export const verifyUserAlreadyExist = async (req, res, next) => {
    try {
        const { email } = req.body;
        await new Validation().verifyUserAlreadyExist(email);
        next();
    } catch (err) {
        console.error("Erro ao verificar usuário existente:", err);
        res.status(err.statusCode || 500).json({ error: err.message || "Erro interno ao verificar usuário." });
    }
};

export function parseDateInt(dateStr) {
    if (!dateStr) return null;

    // Exemplo: "20250130" -> 2025-01-30
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return new Date(`${year}-${month}-${day}`);
}

export default new Validation();

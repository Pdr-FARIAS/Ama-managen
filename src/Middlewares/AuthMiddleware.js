import jwt from "jsonwebtoken";
import { UserError } from "../error/Error.js";
import UserService from "../service/UserService.js";

export async function authentication(req, res, next) {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            throw new UserError("É preciso estar logado.", 401);
        }

        const [, token] = authorization.split(" ");

        // ✅ Decodifica o token com segurança
        const data = jwt.verify(token, process.env.JWT_SECRET);

        // 🔥 Aceita tanto userId quanto id (garante compatibilidade)
        const userId = data.userId || data.id;

        if (!userId) {
            throw new UserError("Token inválido ou expirado.", 401);
        }

        // ✅ Verifica se o usuário realmente existe
        const user = await UserService.findById(userId);
        if (!user) {
            throw new UserError("Usuário não encontrado.", 404);
        }

        // ✅ Define no req com nome padronizado
        req.userId = userId;
        req.email = data.email;
        req.role = data.role;
        next();
    } catch (error) {
        console.error("Erro na autenticação:", error.message);

        if (error instanceof UserError && error.statusCode === 404) {
            next(new UserError("Token inválido. Usuário não encontrado.", 401));
        } else if (error.name === "JsonWebTokenError") {
            next(new UserError("Token inválido.", 401));
        } else if (error.name === "TokenExpiredError") {
            next(new UserError("Token expirado. Faça login novamente.", 401));
        } else {
            next(error);
        }
    }
}

// Middleware opcional para checar permissões
export const authorizeRole = (requiredRole) => {
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                throw new UserError("Token de autenticação não fornecido.", 401);
            }

            const token = authHeader.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (decoded.role !== requiredRole) {
                throw new UserError("Acesso negado: Permissão insuficiente.", 403);
            }

            req.user = decoded;
            next();
        } catch (error) {
            next(error);
        }
    };
};
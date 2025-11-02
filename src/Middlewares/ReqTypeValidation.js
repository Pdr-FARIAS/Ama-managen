// src/middlewares/ReqTypeValidation.js

export default function validate(schema, source = "body") {
    return async function (req, res, next) {
        try {
            const data = req[source] || {};

            // CORREÇÃO AQUI: Valide 'data' diretamente
            const validatedData = await schema.parseAsync(data);

            // E A CORREÇÃO AQUI: Salve o resultado validado
            req.validatedBody = validatedData;
            // req.validated = validatedData; // (pode manter se quiser)

            next();
        } catch (error) {
            // O erro de validação vai cair aqui
            console.error("Erro de validação Zod:", error.errors || error);
            return res.status(400).json({
                message: "Erro de validação nos dados enviados.",
                details: error.errors || error,
            });
        }
    };
}
// src/middlewares/ReqTypeValidation.js
export default function validate(schema, source = "body") {
    return async function (req, res, next) {
        try {

            const data = req[source] || {};

            const validatedData = await schema.parseAsync(data);


            req.validated = validatedData;

            next();
        } catch (error) {
            console.error("Erro de validação Zod:", error.errors || error);
            return res.status(400).json({ error: error.errors || error });
        }
    };
}

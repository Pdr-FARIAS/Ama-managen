// src/middlewares/validateExtrato.js
import { ExtratoError } from "../error/Error.js";

export function validateDatas(req, res, next) {
    const { dataInicio, dataFim } = req.body;

    if (dataInicio && dataFim && new Date(dataInicio) > new Date(dataFim)) {
        throw new ExtratoError("A data de início não pode ser maior que a data de fim.", 400);
    }

    next();
}

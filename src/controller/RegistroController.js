import RegisterService from "../service/RegisterService.js";
import { Io } from "../../serve.js";
import { RegisterError } from "../error/Error.js";
class RegisterController {
    async registerEvento(req, res, next) {
        try {
            const register = await RegisterService.registerEvento(req.userid, req.body);
            Io.emit("novo registro", register);
            res.status(201).json(register)
        } catch (error) {
            next(error);
        }
    }
    async updadeRegister(req, res, next) {
        try {
            const registerid = parseInt(req.params.id);
            const register = await RegisterService.updadeRegister(registerid, req.body);
            Io.emit("registro_atualizado", register);
            res.status(200).json(register)
        } catch (error) {

            next(error)
        }
    }
    async deleteRegister(req, res, next) {
        try {
            const registerid = parseInt(req.params.id);
            const userId = req.userid;
            if (isNaN(registerid)) {
                return res.status(400).json({ message: "ID inválido. Deve ser um número." });
            }
            const resultado = await RegisterService.deleteRegister(registerid, userId);
            Io.emit("registro_deletado", { id: registerid, userId });
            res.status(200).json(resultado);
        } catch (error) {
            console.error("❌ Erro ao deletar registro:", error.message);
            next(error);
        }
    }


    async searchRegistername(req, res, next) {
        try {
            const search = req.query.q;
            const register = await RegisterService.searchRegistername(req.userid, search);
            Io.emit("registro_pesquisado", { termo: search, resultados: register.length });
            res.status(200).json(register);
        } catch (error) {
            next(error);
        }
    }
    async findRegisterid(req, res, next) {
        try {
            const registerid = parseInt(req.params.id);
            const register = await RegisterService.findRegisterid(registerid,);
            res.status(200).json(register);
        } catch (error) {
            next(error);
        }
    }
    async getRegistrosPorEvento(req, res, next) {
        try {
            const eventoid = parseInt(req.params.eventoid);

            if (isNaN(eventoid)) {
                return res.status(400).json({ message: "ID do evento inválido" });
            }

            const registros = await RegisterService.getRegistrosPorEvento(eventoid);

            return res.status(200).json(registros);
        } catch (error) {
            next(error);
        }
    }
    async deleteByEvent(req, res) {
        try {
            const { eventoid } = req.params;

            await RegisterService.deleteByEvent(eventoid);

            return res.status(200).json({
                message: "Registros deste evento foram apagados com sucesso!"
            });
        } catch (error) {
            console.error("Erro ao deletar registros:", error);
            return res.status(500).json({
                error: "Falha ao deletar registros do evento"
            });
        }
    }
}


export default new RegisterController();
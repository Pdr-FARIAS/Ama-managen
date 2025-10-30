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


}


export default new RegisterController();
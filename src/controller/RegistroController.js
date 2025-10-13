import RegisterService from "../service/RegisterService";


class RegisterController {
    async registerEvento(req, res, next) {
        try {
            const register = await RegisterService.registerEvento(req.userid, req.body);
            res.status(201).json(register)
        } catch (error) {
            next(error);
        }
    }
    async updadeRegister(req, res, next) {
        try {
            const registerid = parseInt(req.params.id);
            const register = await RegisterService.updadeRegister(registerid, req.Body);
            res.status(200).json(register)
        } catch (error) {

            next(error)
        }
    }
    async deleteRegister(req, res, next) {
        try {
            const registerid = parseInt(req.params.id);
            await RegisterService.deleteRegister(req.userid, registerid)
            res.status(204).json({ message: `Evento:${registerid},deletado com sucesso !` });
        } catch (error) {
            next(error);
        }
    }

    async searchRegistername(req, res, next) {
        try {
            const search = req.query.q;
            const register = await RegisterService.searchRegistername(req.userid, search)
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
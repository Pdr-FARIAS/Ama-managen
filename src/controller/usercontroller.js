import UserService from "../service/UserService.js"
import ExtratoController from "./ExtratoController.js";

class UserController {
    async registerUser(req, res, next) {
        console.log("Corpo recebido:", req.body);

        try {
            const { name, email, password } = req.body;
            const user = await UserService.RegistrarUser(req.body);

            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async getAllUsers(req, res, next) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }



    async getUser(req, res, next) {
        try {
            const user = await UserService.findById(req.userId);

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const userId = parseInt(req.params.id);
            const { name, email, password } = req.validatedBody;

            const user = await UserService.updateUser(userId, name, email, password);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            const result = await UserService.deleteUser(parseInt(id));
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }


    async login(req, res, next) {
        try {
            const { email, password } = req.validatedBody;
            const token = await UserService.login(email, password);

            res.status(200).json(token);
        } catch (error) {
            next(error);
        }
    }

    async SolicitarToken(res, next) {
        try {
            const token = await UserService.SolicitarToken();
            res.statu(201).json(token);
        } catch (error) {
            next(error);
        }
    }
    async ProcessarExtrato(res, next) {
        try {
            const token = await UserService.SolicitarToken()
            const resultado = await ExtratoController.ReceberExtrato(token);
            res.status(200).json(resultado);
        } catch (error) {
            next(error.status || 500).json({ erro: error.menssage });

        }
    }
    // Buscar usuário pelo e-mail
    async getUserByEmail(req, res, next) {
        try {
            const { email } = req.params;
            const { role, email: userEmail } = req;

            const user = await UserService.findByEmail(email);

            res.status(200).json({
                userid: user.userid,
                user: user.user,
                email: user.email,
                numero_conta: user.numero_conta,
                agencia_conta: user.agencia_conta,
                role: user.role,
            });
        } catch (error) {
            next(error);
        }
    }

}


export default new UserController();

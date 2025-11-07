import EnderecoService from "../service/EnderecoService.js";
import { Io } from "../../serve.js";

class EnderecoController {
    async registerEndereco(req, res, next) {
        try {
            const endereco = await EnderecoService.registerEndereco(req.body);
            Io.emit("novo endereço", endereco);
            res.status(201).json(endereco);
        } catch (error) {
            next(error);
        }
    }

    async updateEndereco(req, res, next) {
        try {
            const endereco = await EnderecoService.updateEndereco(req.query, req.userId, req.body);
            Io.emit("endereco_atualizado", endereco);
            res.status(200).json(endereco);
        } catch (error) {
            next(error);
        }
    }


    async deleteEndereco(req, res, next) {
        try {
            const { id } = req.params;
            const result = await EnderecoService.deleteEndereco(id);
            Io.emit("endereco_deletado", { id })
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
    async findEnderecoById(req, res, next) {
        try {
            const { id } = req.params;
            const endereco = await EnderecoService.findEnderecoById(id);
            res.status(200).json(endereco);
        } catch (error) {
            next(error);
        }
    }


    async searchEndereco(req, res, next) {
        try {
            const resultados = await EnderecoService.searchEndereco(req.query);
            Io.emit("enderecos_pesquisados", { filtros: req.query, resultados: resultados.length });
            res.status(200).json(resultados);
        } catch (error) {
            next(error);
        }
    }


}

export default new EnderecoController();

import EndereoService from "../service/EnderecoService"

class EnderecoController {
    async registerEndereco(req, res, next) {
        try {
            const endereco = await EndereoService.registerEndereco(req.userId, req.body,);

            res.status(201).json(endereco);
        } catch (error) {
            next(error);
        }
    }

    async updateEndereco(req, res, next) {
        try {
            const enderecoid = (req.params.id);
            const endereco = await EndereoService.updateEndereco(enderecoid, req.userId, req.body);

            res.status(200).json(endereco);
        } catch (error) {
            next(error);
        }
    }

    async deleteEndereco(req, res, next) {
        try {
            const enderecoid = req.params.id;

            await EndereoService.deleteEndereco(enderecoid);

            res.status(204).json({ message: `Endereço:${enderecoid}, deletado com sucesso!` });
        } catch (error) {
            next(error);
        }
    }
    async findEnderecoById(req, res, next) {
        try {
            const { id } = req.params;
            const endereco = await EndereoService.findEnderecoid(id);

            return res.status(200).json(endereco);
        } catch (error) {
            next(error);
        }

    }
}
export default new EnderecoController();
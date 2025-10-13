import Extratoservice from "../service/ExtratoService";
import UserService from "../service/UserService";

class ExtratoControler {

    async buscarExtarto(req, res, next) {
        try {
            const userid = req.userid;
            const token = await UserService.SolicitarToken();
            const { agencia, conta } = await UserService.getContaInfo(userid);
            const extrato = await Extratoservice.buscaextratoconta({
                token,
                agencia,
                conta,
                gwDevAppKey: process.env.GW_DEV_APP_KEY,
                dataInicio,
                dataFim,

            });
            await Extratoservice.salvarExtrato(userid, extrato);
            return res.status(200).json({
                mensagem: "Extrato consultado e salvo", extrato
            })
        } catch (error) {
            console.error("Erro ao buscar e salvar extrato:", error);
            return res.status(500).json({ erro: "Erro ao buscar extrato" });
        }
    }



    async ReceberExtrato(token) {
        try {
            const dados = await Extratoservice.buscarExtarto(token);
            const extrato = await Extratoservice.salvarExtrato(dados);
            return { mensagem: 'Extrato processado e salvo com sucesso', extrato }
        } catch (error) {
            next(error)

        }
    }
    async salvarExtrato(dadosExtrato) {
        try {
            const extratoSalvo = await Extratoservice.salvarExtrato(dadosExtrato);
            return extratoSalvo;
        } catch (error) {
            console.error("Erro ao salvar extrato:", error.message);
            throw error;
        }
    }
    async buscarExtratoUsuario(req, res, next) {
        try {
            const userId = req.userId;
            const user = await UserService.findById(userId);


            const token = await UserService.SolicitarToken();
            const extratoData = await Extratoservice.buscarExtratoBB(token, user.agencia_conta, user.numero_conta);

            await Extratoservice.salvarExtrato(userId, extratoData.listaLancamento);

            res.json({ mensagem: "Extrato salvo com sucesso" });
        } catch (err) {
            next(err);
        }
    }
}

export default new ExtratoControler();
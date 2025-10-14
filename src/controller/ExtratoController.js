import Extratoservice from "../service/ExtratoService";
import UserService from "../service/UserService";

class ExtratoControler {

    async buscarExtrato(req, res, next) {
        try {
            const userid = req.userid;
            const { dataInicio, dataFim } = req.query;
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


    async listarExtratos(req, res, next) {
        try {
            const userId = req.userId;
            const extratos = await Extratoservice.listarExtratosUsuario(userId);
            return res.status(200).json({ extratos });
        } catch (error) {
            console.error("Erro ao listar extratos:", error);
            return res.status(500).json({ erro: "Erro ao listar extratos" });
        }
    }

    async buscarValoresParaGrafico(req, res, next) {
        try {
            const userId = req.userId;
            const { dataInicio, dataFim } = req.query;

            const dados = await Extratoservice.listarLancamentosParaGrafico(userId, dataInicio, dataFim);

            return res.status(200).json(dados);
        } catch (err) {
            console.error("Erro ao buscar dados para gráfico:", err.message);
            return res.status(500).json({ error: "Erro interno ao buscar dados do gráfico." });
        }
    }

}

export default new ExtratoControler();
import Extratoservice from "../service/ExtratoService.js";
import UserService from "../service/UserService.js";
import { Io } from "../../serve.js";
class ExtratoControler {

    async buscarExtrato(req, res, next) {
        try {
            const userid = req.userid;
            const { dataInicio, dataFim } = req.query;

            Io.emit("extrato_status", {
                userid,
                etapa: "Iniciando busca de extrato...",
                status: "processando"
            });


            const token = await UserService.SolicitarToken();

            Io.emit("extrato_status", {
                userid,
                etapa: "Token do Banco do Brasil obtido com sucesso.",
                status: "ok"
            });

            const { agencia, conta } = await UserService.getContaInfo(userid);

            Io.emit("extrato_status", {
                userid,
                etapa: `Consultando API do Banco do Brasil (agência ${agencia}, conta ${conta})...`,
                status: "processando"
            });


            const extrato = await Extratoservice.buscaextratoconta({
                token,
                agencia,
                conta,
                gwDevAppKey: process.env.GW_DEV_APP_KEY,
                dataInicio,
                dataFim,
            });

            Io.emit("extrato_status", {
                userid,
                etapa: "Extrato recebido da API. Salvando no banco de dados...",
                status: "processando"
            });

            await Extratoservice.salvarExtrato(userid, extrato);


            Io.emit("extrato_atualizado", {
                userid,
                periodo: { dataInicio, dataFim },
                quantidadeLancamentos: Array.isArray(extrato) ? extrato.length : 1,
                status: "concluido"
            });


            return res.status(200).json({
                mensagem: "Extrato consultado e salvo com sucesso.",
                extrato
            });

        } catch (error) {
            console.error("Erro ao buscar e salvar extrato:", error);

            Io.emit("extrato_erro", {
                userid: req.userid,
                mensagem: error.message || "Erro desconhecido ao buscar extrato.",
                status: "erro"
            });

            return res.status(500).json({ erro: "Erro ao buscar extrato" });
        }
    }


    async criarExtratoManual(req, res, next) {
        try {
            const userId = req.userId;
            const extrato = await Extratoservice.criarExtratoManual(userId, req.body);
            Io.emit("extrato_manual_criado", { userId, extrato });

            res.status(201).json({
                message: "Extrato manual criado com sucesso!",
                extrato
            });
        } catch (error) {
            console.error("Erro ao criar extrato manual:", error.message);
            next(error);
        }
    }

    async listarExtratos(req, res, next) {
        try {
            const userId = req.userId;
            const extratos = await Extratoservice.listarExtratosUsuario(userId);
            Io.emit("extratos_listados", { userId, count: extratos.length });
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
            Io.emit("atualizar_grafico", {
                userId,
                periodo: { dataInicio, dataFim },
                dados,
            });
            return res.status(200).json(dados);
        } catch (err) {
            console.error("Erro ao buscar dados para gráfico:", err.message);
            return res.status(500).json({ error: "Erro interno ao buscar dados do gráfico." });
        }
    }




}

export default new ExtratoControler();
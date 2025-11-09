import Extratoservice from "../service/ExtratoService.js";
import UserService from "../service/UserService.js";
import { Io } from "../../serve.js";
class ExtratoControler {
    async sincronizar(req, res, next) {

        return await ExtratoControler.buscarExtrato(req, res, next);
    }

    async buscarExtrato(req, res, next) {
        try {
            const userId = req.userId;
            const { dataInicio, dataFim } = req.query;

            if (!userId) throw new Error("Usuário não autenticado.");

            Io.emit("extrato_status", {
                userId,
                etapa: "🔍 Iniciando busca de extrato...",
                status: "processando"
            });


            const token = await UserService.SolicitarToken();


            const { agencia, conta } = await UserService.getContaInfo(userId);

            Io.emit("extrato_status", {
                userId,
                etapa: `🏦 Consultando BB (Ag ${agencia} Conta ${conta})`,
                status: "processando"
            });
            const extrato = await ExtratoService.buscaextratoconta({
                token,
                agencia,
                conta,
                gwDevAppKey: process.env.GW_DEV_APP_KEY,
                dataInicio,
                dataFim
            });

            if (!extrato?.listaLancamento?.length) {
                Io.emit("extrato_status", {
                    userId,
                    etapa: "⚠ Nenhum lançamento encontrado.",
                    status: "vazio"
                });
                return res.status(200).json({ message: "Nenhum lançamento encontrado." });
            }
            await ExtratoService.salvarExtrato(userId, extrato.listaLancamento);

            Io.emit("extrato_status", {
                userId,
                etapa: "💾 Dados salvos com sucesso",
                status: "ok"
            });


            Io.emit("extrato_status", {
                userId,
                etapa: "✅ Extrato atualizado!",
                status: "finalizado"
            });

            return res.status(200).json({
                message: "Extrato obtido e salvo com sucesso."
            });

        } catch (error) {
            Io.emit("extrato_status", {
                status: "erro",
                erro: error.message
            });

            next(error);
        }
    }



    async criarExtratoManual(req, res, next) {
        try {
            const userId = req.userId;
            const extrato = await Extratoservice.criarExtratoManual(userId, req.body);
            Io.emit("extrato:create", extrato);

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

    } async listarEntradas(req, res, next) {
        try {
            const userId = req.userId;
            const { dataInicio, dataFim } = req.query;

            const entradas = await Extratoservice.listarEntradas(userId, dataInicio, dataFim);

            return res.status(200).json(entradas);

        } catch (error) {
            console.error("Erro ao listar entradas:", error.message);
            next(error);
        }
    }

    async listarSaidas(req, res, next) {
        try {
            const userId = req.userId;
            const { dataInicio, dataFim } = req.query;

            const saidas = await Extratoservice.listarSaidas(userId, dataInicio, dataFim);

            return res.status(200).json(saidas);

        } catch (error) {
            console.error("Erro ao listar saidas:", error.message);
            next(error);
        }
    }

    async buscarValoresParaGrafico(req, res, next) {
        try {
            const userId = req.userId;
            const { dataInicio, dataFim } = req.query;

            const dados = await Extratoservice.listarLancamentosParaGrafico(
                userId,
                dataInicio,
                dataFim
            );

            const resumoEntradas = await Extratoservice.listarEntradas(
                userId,
                dataInicio,
                dataFim
            );


            const resumoSaidas = await Extratoservice.listarSaidas(
                userId,
                dataInicio,
                dataFim
            );
            Io.emit("atualizar_grafico", {
                userId,
                periodo: { dataInicio, dataFim },
                dados,
                resumoEntradas,
                resumoSaidas
            });

            return res.status(200).json({
                dados,
                resumoEntradas,
                resumoSaidas
            });

        } catch (err) {
            console.error("Erro ao buscar dados para gráfico:", err.message);
            return res.status(500).json({
                error: "Erro interno ao buscar dados do gráfico."
            });
        }
    }


    async deletarExtrato(req, res, next) {
        try {
            const userId = req.userId;
            const { id } = req.params;

            const result = await Extratoservice.deletarExtratoPorId(id, userId);
            Io.emit("extrato:delete", id);


            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    async deletarTodos(req, res, next) {
        try {
            const userId = req.userId;
            const result = await Extratoservice.deletarTodosExtratos(userId);
            Io.emit("extrato:delete:all");
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
    async atualizarExtrato(req, res) {
        try {
            const userId = req.user?.userid || req.userId; // compatível com AuthMiddleware
            const { id } = req.params; // ✅ aqui pegamos o ID da URL corretamente
            const { valorLancamento } = req.body;
            const { sinal } = req.body;
            const { descricao } = req.body;
            const { data_movimento } = req.body;

            console.log("🧩 [Controller] ID recebido:", id);
            console.log("💰 [Controller] Valor recebido:", valorLancamento);

            if (!id) {
                return res.status(400).json({ error: "ID do extrato não fornecido." });
            }

            if (!valorLancamento || isNaN(valorLancamento)) {
                return res.status(400).json({ error: "Valor inválido." });
            }

            const extratoAtualizado = await Extratoservice.atualizarExtrato(
                userId,
                id,
                valorLancamento,
                sinal,
                descricao,
                data_movimento
            );

            Io.emit("extrato:update", extratoAtualizado);
            return res.status(200).json(extratoAtualizado);
        } catch (error) {
            console.error("❌ Erro ao atualizar extrato:", error);
            return res
                .status(500)
                .json({ error: "Erro interno ao atualizar extrato." });
        }
    }
}





export default new ExtratoControler();
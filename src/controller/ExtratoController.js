import Extratoservice from "../service/ExtratoService.js";
import UserService from "../service/UserService.js";
import { Io } from "../../serve.js";
class ExtratoControler {

    async buscarExtrato(req, res, next) {
        try {
            const userId = req.userId; // ✅ vem do middleware Auth
            const { dataInicio, dataFim } = req.query;

            if (!userId) throw new Error("Usuário não autenticado.");

            Io.emit("extrato_status", {
                userId,
                etapa: "🔍 Iniciando busca de extrato...",
                status: "processando"
            });

            // 1️⃣ Solicita token do BB
            const token = await UserService.SolicitarToken();
            Io.emit("extrato_status", {
                userId,
                etapa: "✅ Token do Banco do Brasil obtido com sucesso.",
                status: "ok"
            });

            // 2️⃣ Obtém dados da conta do usuário
            const { agencia, conta } = await UserService.getContaInfo(userId);
            Io.emit("extrato_status", {
                userId,
                etapa: `🏦 Consultando API BB (agência ${agencia}, conta ${conta})...`,
                status: "processando"
            });

            // 3️⃣ Busca extrato na API do BB
            const extrato = await ExtratoService.buscaextratoconta({
                token,
                agencia,
                conta,
                gwDevAppKey: process.env.GW_DEV_APP_KEY,
                dataInicio,
                dataFim,
            });

            // 4️⃣ Verifica se veio algo
            if (!extrato?.listaLancamento?.length) {
                Io.emit("extrato_status", {
                    userId,
                    etapa: "⚠️ Nenhum lançamento encontrado.",
                    status: "vazio"
                });
                return res.status(200).json({ message: "Nenhum lançamento encontrado." });
            }

            // 5️⃣ Salva tudo no banco local
            await ExtratoService.salvarExtrato(userId, extrato.listaLancamento);
            Io.emit("extrato_status", {
                userId,
                etapa: "💾 Lançamentos salvos com sucesso no banco.",
                status: "ok"
            });

            // 6️⃣ Retorna sucesso final
            Io.emit("extrato_status", {
                userId,
                etapa: "✅ Processo de busca e salvamento concluído!",
                status: "finalizado"
            });

            return res.status(200).json({
                message: "Extrato obtido e salvo com sucesso.",
                total: extrato.listaLancamento.length,
            });

        } catch (error) {
            console.error("Erro ao buscar extrato:", error);
            Io.emit("extrato_status", {
                etapa: "❌ Erro ao buscar extrato.",
                status: "erro",
                erro: error.message,
            });
            res.status(500).json({
                error: "Falha ao buscar e salvar extrato.",
                message: error.message,
            });
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

    } async listarEntradas(req, res, next) {
        try {
            const userId = req.userId; // Pega do middleware de autenticação
            const { dataInicio, dataFim } = req.query; // Pega dos query params

            const entradas = await Extratoservice.listarEntradas(userId, dataInicio, dataFim);

            return res.status(200).json(entradas);

        } catch (error) {
            console.error("Erro ao listar entradas:", error.message);
            next(error); // Passa o erro para seu error handler
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

    async deletarExtrato(req, res, next) {
        try {
            const userId = req.userId; // vem do AuthMiddleware
            const { id } = req.params;

            const result = await Extratoservice.deletarExtratoPorId(id, userId);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    // Excluir todos os extratos do usuário
    async deletarTodos(req, res, next) {
        try {
            const userId = req.userId; // vem do token JWT
            const result = await Extratoservice.deletarTodosExtratos(userId);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }




}

export default new ExtratoControler();
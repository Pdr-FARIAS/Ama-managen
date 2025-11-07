import axios from 'axios';
import prisma from '../config/prismaClient.js';


class ExtratoService {
    async listarEntradas(userId, dataInicio, dataFim) {
        if (!userId) throw new Error("ID de usuário inválido");

        const filtros = {
            userid: userId,
            sinal: "C",
        };

        if (dataInicio && dataFim) {
            filtros.data_movimento = {
                gte: new Date(dataInicio),
                lte: new Date(dataFim)
            };
        }

        const entradas = await prisma.extrato.findMany({
            where: filtros,
            select: {
                data_movimento: true,
                valorLancamento: true,
                descricao: true,
                infoComplementar: true
            },
            orderBy: {
                data_movimento: 'asc'
            }
        });

        const total = entradas.reduce((acc, item) => acc + parseFloat(item.valorLancamento), 0);

        return {
            totalEntradas: total,
            quantidade: entradas.length,
            detalhes: entradas
        };
    }

    async listarSaidas(userId, dataInicio, dataFim) {
        if (!userId) throw new Error("ID de usuário inválido");

        const filtros = {
            userid: userId,
            sinal: "D",
        };

        if (dataInicio && dataFim) {
            filtros.data_movimento = {
                gte: new Date(dataInicio),
                lte: new Date(dataFim)
            };
        }

        const saidas = await prisma.extrato.findMany({
            where: filtros,
            select: {
                data_movimento: true,
                valorLancamento: true,
                descricao: true,
                infoComplementar: true
            },
            orderBy: {
                data_movimento: 'asc'
            }
        });

        const total = saidas.reduce((acc, item) => acc + parseFloat(item.valorLancamento), 0);

        return {
            totalSaidas: total,
            quantidade: saidas.length,
            detalhes: saidas
        };
    }


    async criarExtratoManual(userId, extratoData) {
        const [novoExtrato] = await this.salvarExtrato(userId, extratoData);
        return novoExtrato;
    }

    async buscaextratoconta({ token, agencia, conta, gwDevAppKey, dataInicio, dataFim }) {
        const url = `https://api.hm.bb.com.br/digital/apifinanceira/v1/conta-corrente/agencia/${agencia}/conta/${conta}`;

        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'gw-dev-app-key': gwDevAppKey
            },
            params: {
                dataInicioSolicitacao: dataInicio,
                dataFimSolicitacao: dataFim,
                numeroPaginaSolicitacao: 1,
                quantidadeRegistroPaginaSolicitacao: 100
            }
        });

        return response.data;
    }
    async salvarExtrato(userId, listaLancamentos) {

        try {
            if (!userId) throw new Error("ID de usuário inválido.");
            const lancamentos = Array.isArray(listaLancamentos) ? listaLancamentos : [listaLancamentos];
            const extratosSalvos = [];

            for (const lanc of lancamentos) {
                const novoExtrato = await prisma.extrato.create({
                    data: {
                        userid: userId,
                        tipoLancamento: lanc.indicadorTipoLancamento || null,
                        data_lancamento: lanc.dataLancamento ? new Date(lanc.dataLancamento) : new Date(),
                        data_movimento: lanc.dataMovimento ? new Date(lanc.dataMovimento) : new Date(),
                        codigoAgenciaOrigem: lanc.codigoAgenciaOrigem || null,
                        numeroLote: lanc.numeroLote || null,
                        numeroDocumento: String(lanc.numeroDocumento || "0"),
                        codigoHistorico: lanc.codigoHistorico || null,
                        descricao: lanc.textoDescricaoHistorico || lanc.descricao || "Sem descrição",
                        valorLancamento: Number(lanc.valorLancamento || lanc.valor || 0),
                        sinal: lanc.indicadorSinalLancamento || lanc.tipo || "C",
                        infoComplementar: lanc.textoInformacaoComplementar || null,
                        cpfCnpjContrapartida: lanc.numeroCpfCnpjContrapartida || null,
                        tipoPessoaContrapartida: lanc.indicadorTipoPessoaContrapartida || null,
                        codigoBancoContrapartida: lanc.codigoBancoContrapartida || null,
                        codigoAgenciaContrapartida: lanc.codigoAgenciaContrapartida || null,
                        numeroContaContrapartida: lanc.numeroContaContrapartida || null,
                        dvContaContrapartida: lanc.textoDvContaContrapartida || null,
                    },
                });

                extratosSalvos.push(novoExtrato);
            }
            console.log("✅ Extratos salvos com sucesso!");
            return extratosSalvos;
        } catch (error) {
            console.error("Erro ao salvar extrato:", error.message);
            throw new Error("Falha ao salvar extrato no banco.");
        }
    }

    async buscarExtratoUsuario(user, token) {
        try {
            const extrato = await this.buscaextratoconta({
                token,
                agencia: user.agencia_conta,
                conta: user.numero_conta,
                gwDevAppKey: process.env.GW_DEV_APP_KEY,
                dataInicio: user.dataInicio,
                dataFim: user.dataFim,
            });

            await this.salvarExtrato(user.id, extrato.listaLancamento);
            return extrato;
        } catch (err) {
            console.error("Erro ao buscar extrato do usuário:", err.message);
            throw new ExtratoError("Falha ao buscar e salvar extrato do usuário.", 500);
        }
    }


    async listarExtratosUsuario(userId) {
        if (!userId) throw new ExtratoError("ID de usuário inválido", 400);

        return await prisma.extrato.findMany({
            where: { userid: userId },
            orderBy: { data_movimento: "desc" },
        });
    }

    async listarLancamentosParaGrafico(userId, dataInicio, dataFim) {
        if (!userId) throw new ExtratoError("ID de usuário inválido", 400);

        const filtros = { userid: userId };

        if (dataInicio && dataFim) {
            filtros.data_movimento = {
                gte: new Date(dataInicio),
                lte: new Date(dataFim)
            };
        }

        const resultados = await prisma.extrato.findMany({
            where: filtros,
            select: {
                data_movimento: true,
                valorLancamento: true,
                sinal: true,
            },
            orderBy: { data_movimento: 'asc' }
        });

        return resultados.map(item => ({
            data: item.data_movimento,
            entrada: item.sinal === 'C' ? Number(item.valorLancamento) : 0,
            saida: item.sinal === 'D' ? Number(item.valorLancamento) : 0
        }));
    }


    async deletarExtratoPorId(extratoId, userId) {
        if (!extratoId || !userId) throw new Error("Dados inválidos para exclusão.");


        const extrato = await prisma.extrato.findUnique({
            where: { id: Number(extratoId) },
        });

        if (!extrato) throw new Error("Extrato não encontrado.");
        if (extrato.userid !== userId) throw new Error("Você não tem permissão para excluir este extrato.");


        await prisma.extrato.delete({
            where: { id: Number(extratoId) },
        });

        return { message: "Lançamento excluído com sucesso!" };
    }


    async deletarTodosExtratos(userId) {
        if (!userId) throw new Error("Usuário inválido.");

        const result = await prisma.extrato.deleteMany({
            where: { userid: userId },
        });

        return { message: `Foram excluídos ${result.count} lançamentos.` };
    }
}
export default new ExtratoService();

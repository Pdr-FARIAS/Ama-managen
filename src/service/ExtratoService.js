import axios from 'axios';
import prisma from '../config/prismaClient.js';


class ExtratoService {

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

        const lancamentos = Array.isArray(listaLancamentos) ? listaLancamentos : [listaLancamentos];

        for (const lanc of lancamentos) {
            await prisma.extrato_Movimentaçao.create({
                data: {
                    userId,
                    indicadorTipoLancamento: lanc.indicadorTipoLancamento,
                    dataLancamento: lanc.dataLancamento ? parseDateInt(lanc.dataLancamento) : null,
                    dataMovimento: lanc.dataMovimento ? parseDateInt(lanc.dataMovimento) : null,
                    codigoAgenciaOrigem: lanc.codigoAgenciaOrigem,
                    numeroLote: lanc.numeroLote,
                    numeroDocumento: lanc.numeroDocumento,
                    codigoHistorico: lanc.codigoHistorico,
                    textoDescricaoHistorico: lanc.textoDescricaoHistorico,
                    valorLancamento: lanc.valorLancamento,
                    indicadorSinalLancamento: lanc.indicadorSinalLancamento,
                    textoInformacaoComplementar: lanc.textoInformacaoComplementar,
                    numeroCpfCnpjContrapartida: lanc.numeroCpfCnpjContrapartida,
                    indicadorTipoPessoaContrapartida: lanc.indicadorTipoPessoaContrapartida,
                    codigoBancoContrapartida: lanc.codigoBancoContrapartida,
                    codigoAgenciaContrapartida: lanc.codigoAgenciaContrapartida,
                    numeroContaContrapartida: lanc.numeroContaContrapartida,
                    textoDvContaContrapartida: lanc.textoDvContaContrapartida,
                }
            });
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

        return await prisma.extrato_Movimentaçao.findMany({
            where: { userId },
            orderBy: { dataMovimento: "desc" },
        });
    }
}
 async listarLancamentosParaGrafico(userId, dataInicio, dataFim) {
    if (!userId) throw new ExtratoError("ID de usuário inválido", 400);

    const filtros = {
        userId,
    };

    if (dataInicio && dataFim) {
        filtros.dataMovimento = {
            gte: new Date(dataInicio),
            lte: new Date(dataFim)
        };
    }

    const resultados = await prisma.extrato_Movimentaçao.findMany({
        where: filtros,
        select: {
            dataMovimento: true,
            valorLancamento: true,
            indicadorSinalLancamento: true
        },
        orderBy: {
            dataMovimento: 'asc'
        }
    });

    // Normalizando os valores: crédito positivo, débito negativo
    return resultados.map(item => ({
        data: item.dataMovimento,
        valor: item.indicadorSinalLancamento === 'D' ? -item.valorLancamento : item.valorLancamento
    }));
}
}



export default new ExtratoService();

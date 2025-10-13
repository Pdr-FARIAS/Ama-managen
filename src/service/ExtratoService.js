import axios from 'axios';
import prisma from '../config/prismaClient.js';
import { UserError } from "../error/UserError.js";

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
            await prisma.lancamentoExtrato.create({
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
}

export default new ExtratoService();

// src/utils/ExtratoSchema.js
import { z } from "zod";

export const createExtrato = z.object({
    body: z.object({
        agencia: z.string().min(1, "Agência é obrigatória."),
        conta: z.string().min(1, "Conta é obrigatória."),
        dataInicio: z.string().optional(),
        dataFim: z.string().optional(),
        listaLancamentos: z
            .array(
                z.object({
                    dataLancamento: z.string().optional(),
                    dataMovimento: z.string().optional(),
                    codigoHistorico: z.string().optional(),
                    textoDescricaoHistorico: z.string().optional(),
                    valorLancamento: z.number(),
                    indicadorSinalLancamento: z.string().optional(),
                    textoInformacaoComplementar: z.string().optional(),
                })
            )
            .optional(),
    }),


});
export const extratoGraficoSchema = z.object({
    query: z.object({
        dataInicio: z
            .string()
            .optional()
            .refine((val) => !val || !isNaN(Date.parse(val)), {
                message: "dataInicio deve ser uma data válida",
            }),
        dataFim: z
            .string()
            .optional()
            .refine((val) => !val || !isNaN(Date.parse(val)), {
                message: "dataFim deve ser uma data válida",
            }),
    }),
});

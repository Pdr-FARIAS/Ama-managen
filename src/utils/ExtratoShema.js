// src/utils/ExtratoSchema.js
import { z } from "zod";

export const createExtrato = z.object({
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
});



export const extratoGraficoSchema = z.object({
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
});


export const createExtratoManualSchema = z.object({
    indicadorTipoLancamento: z.string().optional(),
    dataLancamento: z.string().optional(),
    dataMovimento: z.string().optional(),
    valorLancamento: z.number().positive("O valor deve ser maior que zero."),
    textoDescricaoHistorico: z
        .string()
        .min(3, "A descrição deve ter pelo menos 3 caracteres."),
    indicadorSinalLancamento: z.enum(["C", "D"]).default("C"),
    textoInformacaoComplementar: z.string().optional(),
});

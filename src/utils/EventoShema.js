import { z } from "zod";

export const createEvento = z.object({
    body: z.object({
        titulo: z.string({ required_error: "O título é obrigatório.", invalid_type_error: "O título deve ser uma string." }).min(3),
        descriçao: z.string({ required_error: "A descrição é obrigatória.", invalid_type_error: "A descrição deve ser uma string." }).min(10),
        data_termino: z.string({ required_error: "A data de término é obrigatória.", invalid_type_error: "A data de término deve ser uma string." }).regex(/^\d{4}-\d{2}-\d{2}$/),
        imagem: z.string().optional(),
    }),
});

export const updateEvento = z.object({
    body: z.object({
        titulo: z.string({ invalid_type_error: "O título deve ser uma string." }).min(3).optional(),
        descriçao: z.string({ invalid_type_error: "A descrição deve ser uma string." }).min(10).optional(),
        data_termino: z.string({ invalid_type_error: "A data de término deve ser uma string." }).regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
        imagem: z.string().optional(),
    }),
});

import { z } from "zod";

export const createEndereco = z.object({
    body: z.object({
        lote: z.string({ required_error: "O lote é obrigatório.", invalid_type_error: "O lote deve ser uma string." }),
        numero: z.string({ required_error: "O número é obrigatório.", invalid_type_error: "O número deve ser uma string." }),
        quadra: z.string({ required_error: "A quadra é obrigatória.", invalid_type_error: "A quadra deve ser uma string." }),
        bairro: z.string({ required_error: "O bairro é obrigatório.", invalid_type_error: "O bairro deve ser uma string." }),
        referencia: z.string().optional(),
    }),
});

export const updateEndereco = z.object({
    body: z.object({
        lote: z.string({ invalid_type_error: "O lote deve ser uma string." }).optional(),
        numero: z.string({ invalid_type_error: "O número deve ser uma string." }).optional(),
        quadra: z.string({ invalid_type_error: "A quadra deve ser uma string." }).optional(),
        bairro: z.string({ invalid_type_error: "O bairro deve ser uma string." }).optional(),
        referencia: z.string().optional(),
    }),
});

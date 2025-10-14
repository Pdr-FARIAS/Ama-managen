import { z } from "zod";

export const createRegister = z.object({
    body: z.object({
        name: z.string({ required_error: "O nome é obrigatório.", invalid_type_error: "O nome deve ser uma string." }),
        sobrenome: z.string({ required_error: "O sobrenome é obrigatório.", invalid_type_error: "O sobrenome deve ser uma string." }),
        responsavel: z.string({ required_error: "O responsável é obrigatório.", invalid_type_error: "O responsável deve ser uma string." }),
        idade: z.number({ required_error: "A idade é obrigatória.", invalid_type_error: "A idade deve ser um número." }).int().positive(),
        idade_responsavel: z.number({ required_error: "A idade do responsável é obrigatória.", invalid_type_error: "A idade do responsável deve ser um número." }).int().positive(),
        enderecoid: z.string({ required_error: "O ID do endereço é obrigatório.", invalid_type_error: "O ID do endereço deve ser uma string." }).uuid(),
        endereco: z.object({
            lote: z.string({ required_error: "O lote é obrigatório." }),
            numero: z.string({ required_error: "O número é obrigatório." }),
            quadra: z.string({ required_error: "A quadra é obrigatória." }),
            bairro: z.string({ required_error: "O bairro é obrigatório." }),
            referencia: z.string().optional(),
        }).optional(),
    }),
});

export const updateRegister = z.object({
    body: z.object({
        name: z.string({ invalid_type_error: "O nome deve ser uma string." }).optional(),
        sobrenome: z.string({ invalid_type_error: "O sobrenome deve ser uma string." }).optional(),
        responsavel: z.string({ invalid_type_error: "O responsável deve ser uma string." }).optional(),
        idade: z.number({ invalid_type_error: "A idade deve ser um número." }).int().positive().optional(),
        idade_responsavel: z.number({ invalid_type_error: "A idade do responsável deve ser um número." }).int().positive().optional(),
        enderecoid: z.string({ invalid_type_error: "O ID do endereço deve ser uma string." }).uuid().optional(),
    }),
});

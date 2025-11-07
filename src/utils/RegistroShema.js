import { z } from "zod";

export const createRegister = z.object({

    nome: z.string({ required_error: "O nome é obrigatório." }),
    sobrenome: z.string({ required_error: "O sobrenome é obrigatório." }),
    responsavel: z.string({ required_error: "O responsável é obrigatório." }),
    idade: z.number({ required_error: "A idade é obrigatória." }),
    idade_responsavel: z.number({ required_error: "A idade do responsável é obrigatória." }),
    eventoid: z.number({ required_error: "O ID do evento é obrigatório." }),
    enderecoid: z.string().uuid().optional().or(z.literal('').optional()),
    endereco: z.object({ lote: z.string().optional(), numero: z.union([z.string(), z.number()]).optional(), quadra: z.string().optional(), bairro: z.string().optional(), referencia: z.string().optional(), })
        .optional(),
});

export const updateRegister = z.object({

    name: z.string({ invalid_type_error: "O nome deve ser uma string." }).optional(),
    sobrenome: z.string({ invalid_type_error: "O sobrenome deve ser uma string." }).optional(),
    responsavel: z.string({ invalid_type_error: "O responsável deve ser uma string." }).optional(),
    idade: z.number({ invalid_type_error: "A idade deve ser um número." }).int().positive().optional(),
    idade_responsavel: z.number({ invalid_type_error: "A idade do responsável deve ser um número." }).int().positive().optional(),
    enderecoid: z.string({ invalid_type_error: "O ID do endereço deve ser uma string." }).uuid().optional(),
});

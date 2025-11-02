import { z } from "zod";

export const createUser = z.object({

    name: z.string({ required_error: "O nome é obrigatório.", invalid_type_error: "O nome deve ser uma string." }),
    email: z.string({ required_error: "O email é obrigatório.", invalid_type_error: "O email deve ser uma string." }),
    password: z.string({ required_error: "A senha é obrigatória.", invalid_type_error: "A senha deve ser uma string." }),
});


export const updateUser = z.object({

    name: z.string({ invalid_type_error: "O nome deve ser uma string." }).optional(),
    email: z.string({ invalid_type_error: "O email deve ser uma string." }).optional(),
    password: z.string({ invalid_type_error: "A senha deve ser uma string." }).optional(),
    agencia_conta: z.string().min(1).optional().or(z.literal('')),
    numero_conta: z.string().min(1).optional().or(z.literal('')),
});

export const login = z.object({
    email: z.string({ required_error: "O email é obrigatório.", invalid_type_error: "O email deve ser uma string." }),
    password: z.string({ required_error: "A senha é obrigatória.", invalid_type_error: "A senha deve ser uma string." }),
});

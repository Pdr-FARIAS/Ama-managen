// src/service/EnderecoService.js
import prisma from '../config/prismaClient.js';

export class EnderecoService {

    async registerEndereco(body, tx) {
        try {
            const newEndreco = await prisma.$transaction(async (tx) => {
                const RegisterEndereco = await tx.endereço.create({
                    data: {
                        lote: body.lote,
                        numero: body.numero,
                        quadra: body.quadra,
                        bairro: body.bairro,
                        referencia: body.referencia,
                    },
                });

                return RegisterEndereco;
            });
            return newEndreco;

        } catch (error) {
            console.error("---- ERRO OCORREU UM ERRO INESPERADO----");
            console.error("mensagem do erro original :", error.menssage);
            throw new RegisterError(`Falha ao salvar endereço`, 400);
        }

    };
    async updateEndereco(id, body) {
        const endeco = await this.findEnderecoid(id);
        try {
            return prisma.$transaction(async (tx) => {
                const updateEndereco = await tx.endereço.update({
                    where: { endereçoid: endeco },
                    data: {
                        lote: body.lote,
                        numero: body.numero,
                        quadra: body.quadra,
                        bairro: body.bairro,
                        referencia: body.referencia,

                    },

                });
                return updateEndereco;
            })
        } catch (error) {
            console.error("---- ERRO OCORREU UM ERRO INESPERADO----");
            console.error("mensagem do erro original :", error.menssage);
            throw new RegisterError(`Falha ao alterar endereço`, 400);

        }
    }

    async deleteEndereco(id) {
        const endeco = await this.findEnderecoid(id);
        return prisma.$transaction(async (tx) => {
            await prisma.endereço.delete({
                where: { endereçoid: endeco },

            });

        })

    }

    async findEnderecoid(id) {
        const endereco = await prisma.endereço.findFirst({
            where: { endereçoid: id }
        });
        if (!endereco) {
            throw new EnderecoError("Endereço não encontrado ou não possui permissão para acessá-lo.", 404);
        }
    }



}
export default new EnderecoService();
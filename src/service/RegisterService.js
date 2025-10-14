// src/service/RegistroService.js
import prisma from '../config/prismaClient.js';
import EnderecoService from "../service/EnderecoService.js";




class RegisterService {
    async registerEvento(id, body) {
        await this.verifyRgisterAlreadyExist(id, body.name)
        try {
            const newRegisterEvento = await prisma.$transaction(async (tx) => {
                if (!enderecoId) {
                    const novoEndereco = await EnderecoService.registerEndereco(body.endereco, tx);
                    enderecoId = novoEndereco.id;
                }

                const RegisterEvento = await tx.registo_evento.create({
                    data: {
                        name: body.name,
                        sobrenome: body.sobrenome,
                        responsavel: body.responsavel,
                        idade: body.idade,
                        idade_responsavel: body.idade_responsavel,
                        endereço: {
                            connect: {
                                id: body.enderecoid
                            },
                        },
                    },

                })
                return RegisterEvento;
            });
            return newRegisterEvento;
        } catch (error) {
            console.error("---- ERRO OCORREU UM ERRO INESPERADO----");
            console.error("mensagem do erro original :", error.menssage);
            throw new RegisterError(`Falha ao salvar registro`, 400);
        }
    };

    async updadeRegister(id, body) {
        const registro = await this.findRegisterid(id);
        try {
            return prisma.$transaction(async (tx) => {
                const updadeRegister = await tx.registo_evento.update({
                    where: { registro_id: registro },
                    data: {
                        name: body.name,
                        sobrenome: body.sobrenome,
                        responsavel: body.responsavel,
                        idade: body.idade,
                        idade_responsavel: body.idade_responsavel
                    },
                });
                return updadeRegister;

            });

        } catch (error) {
            console.error("---- ERRO OCORREU UM ERRO INESPERADO----");
            console.error("mensagem do erro original :", error.menssage);
            throw new RegisterError(`Falha ao alterar registro`, 400);
        }

    };
    async deleteRegister(id) {
        const Registro = await this.findRegisterid(id);
        return prisma.$transaction(async (tx) => {
            await prisma.registo_evento.delete({
                where: { register_id: id },
            });
        })

    }

    async findRegisterid(id) {
        const Registro = await prisma.registo_evento.findFirst({
            where: { registro_id: id },
        });
        if (!Registro) {
            throw new RegisterError("Registro não encontrado ou não possui permissão para acessá-lo.", 404);
        }
        return Registro;
    }
    async searchRegistername(id, search) {
        return await prisma.registo_evento.findMany({
            where: {
                register_id: id,
                name: {
                    contains: search,
                },
            },
        });
    }


    async verifyRgisterAlreadyExist(id, name) {
        const registro = await prisma.registo_evento.findFirst({
            where: { registro_id: id, name: name },
        });

        if (registro) {
            throw new RegistroError("Usuario  já registrado!", 400);
        }
    }



};
export default new RegisterService();
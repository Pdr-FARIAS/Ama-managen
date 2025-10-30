// src/service/RegistroService.js
import prisma from '../config/prismaClient.js';
import EnderecoService from "../service/EnderecoService.js";
import { RegisterError } from "../error/Error.js";




class RegisterService {
    async registerEvento(id, body) {
        await this.verifyRgisterAlreadyExist(id, body.nome);
        try {
            const newRegisterEvento = await prisma.$transaction(async (tx) => {
                let enderecoId = body.enderecoid;

                if (!enderecoId && body.endereco) {
                    console.log("📍 Nenhum endereço informado — criando novo via EnderecoController...");
                    const fakeReq = {
                        body: body.endereco
                    };
                    const enderecoCriado = await EnderecoService.registerEndereco(body.endereco, tx);
                    enderecoId = enderecoCriado.endereçoid;
                }

                const RegisterEvento = await tx.registo_evento.create({
                    data: {
                        nome: body.nome,
                        sobrenome: body.sobrenome,
                        responsavel: body.responsavel,
                        idade: body.idade,
                        idade_responsavel: body.idade_responsavel,
                        endereço: {
                            connect: { endereçoid: enderecoId },
                        },
                        evento: {
                            connect: { eventoid: body.eventoid },
                        },
                    },
                    include: {
                        endereço: true,
                        evento: true,
                    },
                });
                return RegisterEvento;
            });

            return newRegisterEvento;
        } catch (error) {
            console.error("---- ERRO OCORREU UM ERRO INESPERADO----");
            console.error("mensagem do erro original :", error.message);
            throw new RegisterError(`Falha ao salvar registro`, 400);
        }
    }

    async updadeRegister(id, body) {
        const registro = await this.findRegisterid(id);

        try {
            const camposPermitidos = {
                nome: body.nome,
                sobrenome: body.sobrenome,
                responsavel: body.responsavel,
                idade: body.idade,
                idade_responsavel: body.idade_responsavel,
            };


            Object.keys(camposPermitidos).forEach(
                (key) => camposPermitidos[key] === undefined && delete camposPermitidos[key]
            );

            const updated = await prisma.registo_evento.update({
                where: { registro_id: registro.registro_id },
                data: camposPermitidos,
            });

            return updated;
        } catch (error) {
            console.error("---- ERRO AO ATUALIZAR REGISTRO ----");
            console.error("mensagem do erro original:", error.message);
            throw new RegisterError(`Falha ao alterar registro`, 400);
        }
    }
    async deleteRegister(id, userId) {
        if (!id || isNaN(id)) {
            throw new RegisterError("ID do registro inválido ou não informado.", 400);
        }
        const registro = await this.findRegisterid(id);
        if (!registro) {
            throw new RegisterError("Registro não encontrado.", 404);
        }
        return prisma.$transaction(async (tx) => {
            await tx.registo_evento.delete({
                where: { registro_id: id },
            });
            return {
                message: `Registro ${id} deletado com sucesso!`,
                deletedBy: userId,
            };
        });
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
                nome: {
                    contains: search,
                },
            },
        });
    }


    async verifyRgisterAlreadyExist(id, nome) {
        const registro = await prisma.registo_evento.findFirst({
            where: { registro_id: id, nome: nome },
        });

        if (registro) {
            throw new RegisterError("Usuario  já registrado!", 400);
        }
    }



};
export default new RegisterService();
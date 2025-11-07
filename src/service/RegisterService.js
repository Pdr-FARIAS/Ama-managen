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
                    const enderecoCriado = await EnderecoService.registerEndereco(body.endereco, tx);
                    enderecoId = enderecoCriado.endereçoid;
                }


                const eventoExiste = await tx.criar_evento.findUnique({
                    where: { eventoid: body.eventoid },
                });

                if (!eventoExiste) {
                    console.error(`❌ Evento com ID ${body.eventoid} não encontrado.`);
                    throw new RegisterError("Evento não encontrado. Crie o evento antes de registrar.", 404);
                }

                console.log(`✅ Evento encontrado: ${eventoExiste.titulo}`);

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

                console.log("✅ Registro salvo com sucesso:", RegisterEvento);
                return RegisterEvento;
            });

            return newRegisterEvento;
        } catch (error) {
            console.error("---- ERRO AO REGISTRAR EVENTO ----");
            console.error("Mensagem original:", error.message);
            console.error("Stack trace:", error.stack);

            throw new RegisterError("Falha ao salvar registro", 400);
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


            let enderecoUpdate = undefined;
            if (body.endereco) {
                enderecoUpdate = {
                    update: {
                        lote: body.endereco.lote,
                        quadra: body.endereco.quadra,
                        bairro: body.endereco.bairro,
                        referencia: body.endereco.referencia,
                        numero: body.endereco.numero,
                    }
                };


                Object.keys(enderecoUpdate.update).forEach(
                    (key) => enderecoUpdate.update[key] === undefined && delete enderecoUpdate.update[key]
                );
            }

            const updated = await prisma.registo_evento.update({
                where: { registro_id: registro.registro_id },
                data: {
                    ...camposPermitidos,
                    ...(enderecoUpdate ? { endereço: enderecoUpdate } : {})
                },
                include: {
                    endereço: true
                }
            });

            return updated;

        } catch (error) {
            console.error("---- ERRO AO ATUALIZAR REGISTRO ----");
            console.error("Mensagem:", error.message);
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
    async deleteAllRegistros() {
        try {

            await prisma.registo_evento.deleteMany({});

            return true;
        } catch (error) {
            console.error("Erro ao deletar registros:", error);
            throw new RegisterError("Falha ao deletar todos os registros");
        }
    }



    async findRegisterid(id) {
        const Registro = await prisma.registo_evento.findFirst({
            where: { registro_id: id },
            include: {
                endereço: true
            }



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
                created_registro,
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
    async deleteByEvent(eventoid) {
        try {
            await prisma.registo_evento.deleteMany({
                where: { eventoid: Number(eventoid) }
            });
        } catch (error) {
            console.error("Erro ao deletar registros por evento:", error);
            throw new Error("Erro ao deletar registros deste evento");
        }
    }
    async getRegistrosPorEvento(eventoid) {
        try {
            const registros = await prisma.registo_evento.findMany({
                where: { eventoid: Number(eventoid) },

                include: {
                    endereço: true,
                    evento: {
                        select: {
                            titulo: true,
                            descriçao: true,
                            data_termino: true
                        }
                    }
                },

                orderBy: { created_registro: "desc" }
            });

            if (!registros.length) {
                throw new RegisterError("Nenhum registro encontrado para este evento", 404);
            }

            return registros;

        } catch (error) {
            console.error("Erro ao buscar registros do evento:", error);
            throw new RegisterError("Falha ao buscar registros deste evento", 400);
        }
    }

};
export default new RegisterService();
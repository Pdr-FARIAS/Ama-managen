// src/service/EventoService.js
import prisma from '../config/prismaClient.js';


class EventoService {
    async registerEvento(id, body) {
        await this.verifyEventoalreadyExist(id, body)
        const CriarEvento = await tx.criar_evento.create({
            data: {
                titulo: body.titulo,
                descriçao: body.descriçao,
                data_termino: body.data_termino,
                criadorid: {
                    connect: { criadorid: id }
                },

            },


        });
        return CriarEvento;

    }
    async updadeEvento(eventoid, userid, body) {
        await this.findEventoid(eventoid);
        return await prisma.criar_evento.update({
            where: { eventoid },
            data: {
                titulo: body.titulo,
                descriçao: body.descriçao,
                data_termino: body.data_termino
            }
        })
    }

    async deleteEvento(id) {
        await this.findEventoid(id)
        await prisma.criar_evento.delete({
            where: { eventoid: id }
        });
    }


    async findEventoid(id) {
        const evento = await prisma.criar_evento.findFirst({
            where: { eventoid: id }
        })
        if (!evento) {
            throw new EventoError("Evento nao encontrado ! ou ano tem permissao", 404);
        }
        return evento;
    }


    async verifyEventoalreadyExist(id, name) {
        const evento = await prisma.criar_evento.findFirst({
            where: { eventoid: id, name: name }
        });
        if (evento) {
            throw new EventoError("Evento ja criado ", 400);

        }
    }
}

export default new EventoService();


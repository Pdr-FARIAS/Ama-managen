// src/service/EventoService.js
import prisma from '../config/prismaClient.js';
import { EventoError } from "../error/Error.js";


class EventoService {

    async registerEvento(userid, body) {
        await this.verifyEventoAlreadyExist(body.titulo, userid);

        const criarEvento = await prisma.criar_evento.create({
            data: {
                titulo: body.titulo,
                descriçao: body.descriçao,
                data_termino: new Date(body.data_termino),
                image: body.image || body.imagem || body.imageUrl || null,
                criador: {
                    connect: { userid },
                },


            },
            include: {
                criador: {
                    select: {
                        userid: true,
                        user: true,
                        email: true,
                        numero_conta: true,
                        agencia_conta: true,
                    },
                },
            },
        });

        return criarEvento;
    }


    async updadeEvento(eventoid, userid, body) {
        await this.findEventoid(eventoid);

        const eventoAtualizado = await prisma.criar_evento.update({
            where: { eventoid },
            data: {
                titulo: body.titulo,
                descriçao: body.descriçao,
                data_termino: body.data_termino ? new Date(body.data_termino) : undefined,
                ultima_mod: new Date(),
                image: body.image || body.imagem || undefined,


            },
            include: {
                criador: {
                    select: {
                        userid: true,
                        user: true,
                        email: true,
                    },
                },
            },
        });

        return eventoAtualizado;
    }


    async deleteEvento(eventoid) {
        await this.findEventoid(eventoid);

        await prisma.criar_evento.delete({
            where: { eventoid },
        });
    }

    async findEventoid(eventoid) {
        const evento = await prisma.criar_evento.findUnique({
            where: { eventoid },
            include: {
                criador: {
                    select: {
                        userid: true,
                        user: true,
                        email: true,
                    },
                },
            },
        });

        if (!evento) {
            throw new EventoError("Evento não encontrado ou sem permissão.", 404);
        }

        return evento;
    }


    async getAllEventos() {
        const eventos = await prisma.criar_evento.findMany({
            include: {
                criador: {
                    select: {
                        userid: true,
                        user: true,
                        email: true,
                        numero_conta: true,
                        agencia_conta: true,


                    },
                },
            },
        });

        if (!eventos.length) throw new EventoError("Nenhum evento encontrado.", 404);

        return eventos;
    }
    async searchByTitulo(titulo) {
        return await prisma.criar_evento.findMany({
            where: {
                titulo: {
                    contains: titulo,

                },
            },
            include: {
                criador: true,
            },
        });
    }


    async verifyEventoAlreadyExist(titulo, criadorid) {
        const evento = await prisma.criar_evento.findFirst({
            where: { titulo, criadorid },
        });

        if (evento) {
            throw new EventoError("Já existe um evento com este título para este usuário.", 400);
        }
    }
    async findRegistrosPorEventoId(eventoid) {

        const registros = await prisma.registo_evento.findMany({
            where: { eventoid: eventoid },
            select: {
                registro_id: true,
                nome: true,
                created_registro: true
            },
            orderBy: { created_registro: "desc" },
        });
        if (!registros.length) {
            throw new Error("Nenhum registro encontrado para este evento.");
        }
        return registros;
    }

}

export default new EventoService();


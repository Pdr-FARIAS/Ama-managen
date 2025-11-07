// src/controller/EventoController.js
import EventoService from "../service/EventoService.js";
import { Io } from "../../serve.js";

class EventoController {
    async registerEvento(req, res, next) {
        try {
            console.log(req);
            const evento = await EventoService.registerEvento(req.userId, req.body);
            Io.emit("novo_evento", evento);
            res.status(201).json(evento);
        } catch (error) {
            next(error);
        }
    }

    async findEventoid(req, res, next) {
        try {
            const eventoid = parseInt(req.params.id);
            const evento = await EventoService.findEventoid(eventoid);
            res.status(200).json(evento);
        } catch (error) {
            next(error);
        }
    }

    async getAllEventos(req, res, next) {
        try {
            const eventos = await EventoService.getAllEventos();
            Io.emit("eventos_listados", { count: eventos.length });
            res.status(200).json(eventos);
        } catch (error) {
            next(error);
        }
    }

    async updadeEvento(req, res, next) {
        try {
            const eventoid = parseInt(req.params.id);
            const evento = await EventoService.updadeEvento(eventoid, req.userId, req.body);
            Io.emit("evento_atualizado", evento);
            res.status(200).json(evento);
        } catch (error) {
            next(error);
        }
    }

    async deleteEvento(req, res, next) {
        try {
            const eventoid = parseInt(req.params.id);
            await EventoService.deleteEvento(eventoid);
            Io.emit("evento_deletado", { id: eventoid });
            res.status(200).json({ message: `Evento ${eventoid} deletado com sucesso!` });
        } catch (error) {
            next(error);
        }
    }
    async searchEvento(req, res, next) {
        try {
            const { titulo } = req.query;
            const eventos = await EventoService.searchByTitulo(titulo || "");
            Io.emit("evento_pesquisado", { termo: titulo, resultados: eventos.length });
            res.status(200).json(eventos);
        } catch (error) {
            next(error);
        }
    }
    async getRegistrosPorEvento(req, res, next) {
        try {
            const eventoid = parseInt(req.params.id);
            const registros = await EventoService.findRegistrosPorEventoId(eventoid);
            res.status(200).json(registros);
        } catch (error) {
            next(error);
        }
    }


}

export default new EventoController();

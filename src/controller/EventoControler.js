import EventoService from "../service/EventoService";


class Eventocontoller {
    async registerEvento(req, res, next) {
        try {
            const evento = await EventoService.registerEvento(req.userid, req.body);
            res.status(201).json(evento)
        } catch (error) {
            next(error);
        }
    }
    async findEventoid(req, res, next) {
        try {
            const eventoid = parseInt(req.params.id);
            const evento = await EventoService.findEventoid(eventoid, req.userid);
            res.status(200).json(evento);
        } catch (error) {
            next(error);
        }
    }
    async updadeEvento(req, res, next) {
        try {
            const eventoid = parseInt(req.params.id);
            const evento = await EventoService.updadeEvento(eventoid, req.userid, req.Body);
            res.status(200).json(evento)
        } catch (error) {

            next(error)
        }
    }

    async deleteEvento(req, res, next) {
        try {
            const eventoid = parseInt(req.params.id);
            await EventoService.deleteEvento(eventoid)
            res.status(204).json({ message: `Evento:${eventoid},deletado com sucesso !` });
        } catch (error) {
            next(error);
        }
    }


}


export default new Eventocontoller()
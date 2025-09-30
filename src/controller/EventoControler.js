// src/controller/EventoController.js
import { create as createEvento, list as listEventos, update as updateEvento, remove as removeEvento } from '../service/EventoService.js';

export const create = async (req, res) => {
    try {
        const evento = await createEvento(req.body);
        res.status(201).json(evento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const list = async (req, res) => {
    try {
        const eventos = await listEventos();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const evento = await updateEvento(Number(id), req.body);
        res.json(evento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await removeEvento(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

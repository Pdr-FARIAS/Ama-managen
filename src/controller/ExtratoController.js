import { list as _list, create as _create, update as _update, remove as _remove } from '../service/ExtratoService.js';

const list = async (req, res) => {
    try {
        const extratos = await _list();
        res.json(extratos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const get = async (req, res) => {
    try {
        const id = req.params.id;
        const extrato = await _get(id);
        if (!extrato) return res.status(404).json({ error: 'Extrato not found' });
        res.json(extrato);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const create = async (req, res) => {
    try {
        const payload = req.body;
        const created = await _create(payload);
        res.status(201).json(created);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const updated = await _update(id, payload);
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        await _remove(id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default { list, get, create, update, remove };

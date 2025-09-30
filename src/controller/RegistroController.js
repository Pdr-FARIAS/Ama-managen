import { list as _list, create as _create, update as _update, remove as _remove } from '../service/RegistroService.js';

const list = async (req, res) => {
    try {
        const registros = await _list();
        res.json(registros);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const get = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const registro = await _get(id);
        if (!registro) return res.status(404).json({ error: 'Registro not found' });
        res.json(registro);
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
        const id = parseInt(req.params.id, 10);
        const payload = req.body;
        const updated = await _update(id, payload);
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const remove = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await _remove(id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default { list, get, create, update, remove };

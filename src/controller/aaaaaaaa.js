import { list as _list, get as _get, create as _create, update as _update, remove as _remove } from '../service/EnderecoService.js';

const list = async (req, res) => {
    try {
        const enderecos = await _list();
        res.json(enderecos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const get = async (req, res) => {
    try {
        const id = req.params.id;
        const endereco = await _get(id);
        if (!endereco) return res.status(404).json({ error: 'Endereço not found' });
        res.json(endereco);
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

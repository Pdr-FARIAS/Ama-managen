// src/controller/usercontroller.js
import * as UserService from "../service/UserService.js";

// Listar todos
export const list = async (req, res) => {
    try {
        const users = await UserService.list();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Buscar por ID
export const get = async (req, res) => {
    try {
        const user = await UserService.get(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Criar
export const create = async (req, res) => {
    try {
        const user = await UserService.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar
export const update = async (req, res) => {
    try {
        const user = await UserService.update(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Remover
export const remove = async (req, res) => {
    try {
        await UserService.remove(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

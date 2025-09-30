// src/router/EventoRouter.js
import { Router } from 'express';
import { create, list, update, remove } from '../controller/EventoControler.js';

const router = Router();

router.post('/', create);
router.get('/', list);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;

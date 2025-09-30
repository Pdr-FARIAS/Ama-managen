import { Router } from 'express';
import ExtratoController from '../controller/ExtratoController.js';
const router = Router();

router.get('/', ExtratoController.list);
router.get('/:id', ExtratoController.get);
router.post('/', ExtratoController.create);
router.put('/:id', ExtratoController.update);
router.delete('/:id', ExtratoController.remove);;

export default router;

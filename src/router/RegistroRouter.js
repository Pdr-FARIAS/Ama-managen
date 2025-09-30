import { Router } from 'express';
import RegistroController from '../controller/RegistroController.js';

const router = Router();

router.get('/', RegistroController.list);
router.get('/:id', RegistroController.get);
router.post('/', RegistroController.create);
router.put('/:id', RegistroController.update);
router.delete('/:id', RegistroController.remove);

export default router;

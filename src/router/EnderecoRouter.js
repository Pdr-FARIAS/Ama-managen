import { Router } from 'express';
import EnderecoController from '../controller/aaaaaaaa.js';
const router = Router();

router.get('/', EnderecoController.list);
router.get('/:id', EnderecoController.get);
router.post('/', EnderecoController.create);
router.put('/:id', EnderecoController.update);
router.delete('/:id', EnderecoController.remove);


export default router;

import express from "express";
import EnderecoController from "../controller/EnderecoContoller.js";
import { authentication } from "../middlewares/AuthMiddleware.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { createEndereco, updateEndereco } from "../utils/Enderecoshema.js";

const router = express.Router();

router.post("/endereco", authentication, validate(createEndereco), EnderecoController.registerEndereco);
router.get("/endereco/:id", authentication, EnderecoController.findEnderecoById);
router.put("/endereco/:id", authentication, validate(updateEndereco), EnderecoController.updateEndereco);
router.delete("/endereco/:id", authentication, EnderecoController.deleteEndereco);

export default router;

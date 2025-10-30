import express from "express";
import EnderecoController from "../controller/EnderecoContoller.js";
import { authentication, authorizeRole } from "../middlewares/AuthMiddleware.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { createEndereco, updateEndereco } from "../utils/Enderecoshema.js";

const router = express.Router();

router.post("/", validate(createEndereco), EnderecoController.registerEndereco);
router.get("/search", EnderecoController.searchEndereco);
router.get("/:id", EnderecoController.findEnderecoById);
router.put("/", authentication, authorizeRole("ADMIN"), validate(updateEndereco), EnderecoController.updateEndereco);
router.delete("/:id", authentication, authorizeRole("ADMIN"), EnderecoController.deleteEndereco);


export default router;


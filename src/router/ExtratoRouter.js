// src/routes/extratoRoutes.js
import express from "express";
import ExtratoController from "../controller/ExtratoController.js";
import { authentication } from "../middlewares/AuthMiddleware.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { extratoGraficoSchema, createExtratoManualSchema } from "../utils/ExtratoShema.js";

const router = express.Router();


router.get("/buscar", authentication, ExtratoController.buscarExtrato);
router.get("/extrato", authentication, ExtratoController.listarExtratos);
router.get("/grafico", authentication, validate(extratoGraficoSchema), ExtratoController.buscarValoresParaGrafico);
router.post("/manual", authentication, validate(createExtratoManualSchema), ExtratoController.criarExtratoManual);
router.get("/entradas", authentication, ExtratoController.listarEntradas);
router.get("/saidas", authentication, ExtratoController.listarSaidas);
router.delete("/:id", authentication, ExtratoController.deletarExtrato);
router.delete("/", authentication, ExtratoController.deletarTodos);
router.get("/sincronizar", authMiddleware, ExtratoController.sincronizar);

export default router;

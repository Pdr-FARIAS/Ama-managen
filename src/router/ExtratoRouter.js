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

export default router;

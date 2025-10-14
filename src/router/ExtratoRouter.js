// src/routes/extratoRoutes.js
import express from "express";
import ExtratoController from "../controller/ExtratoController.js";
import { authentication } from "../middlewares/AuthMiddleware.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { extratoGraficoSchema } from "../utils/ExtratoSchema.js";

const router = express.Router();
router.get("/extrato/buscar", authentication, ExtratoController.buscarExtrato);
router.get("/extrato", authentication, ExtratoController.listarExtratos);
router.get("/extrato/grafico", authentication, validate(extratoGraficoSchema), ExtratoController.buscarValoresParaGrafico);

export default router;

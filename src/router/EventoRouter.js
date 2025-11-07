import express from "express";
import EventoController from "../controller/EventoControler.js";
import { authentication } from "../middlewares/AuthMiddleware.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { createEvento, updateEvento } from "../utils/EventoShema.js";

const router = express.Router();
router.post("/", authentication, validate(createEvento), EventoController.registerEvento);
router.get("/", EventoController.getAllEventos);
router.get("/:id", EventoController.findEventoid);
router.put("/:id", authentication, validate(updateEvento), EventoController.updadeEvento);
router.delete("/:id", authentication, EventoController.deleteEvento);
router.get("/search/titulo", EventoController.searchEvento);

export default router;

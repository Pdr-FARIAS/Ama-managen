import express from "express";
import EventoController from "../controller/EventoControler.js";
import { authentication } from "../middlewares/AuthMiddleware.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { createEvento, updateEvento } from "../utils/EventoShema.js";

const router = express.Router();

router.post("/evento", authentication, validate(createEvento), EventoController.registerEvento);
router.get("/evento/:id", authentication, EventoController.findEventoid);
router.put("/evento/:id", authentication, validate(updateEvento), EventoController.updadeEvento);
router.delete("/evento/:id", authentication, EventoController.deleteEvento);

export default router;

import express from "express";
import RegistroController from "../controller/RegistroController.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { createRegister, updateRegister } from "../utils/RegistroShema.js"

const router = express.Router();


router.post("/registro", validate(createRegister), RegistroController.registerEvento);
router.get("/:id", RegistroController.findRegisterid);
router.get("/registros", RegistroController.searchRegistername);
router.put("/:id", validate(updateRegister), RegistroController.updadeRegister);
router.delete("/:id", RegistroController.deleteRegister);
router.delete("/:eventoid/registros", RegistroController.deleteByEvent);
router.get("/evento/:eventoid", RegistroController.getRegistrosPorEvento);


export default router;

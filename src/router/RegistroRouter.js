import express from "express";
import RegistroController from "../controller/RegistroController.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { createRegister, updateRegister } from "../utils/RegistroShema.js"

const router = express.Router();


router.post("/registro", validate(createRegister), RegistroController.registerEvento);
router.get("/registro/:id", RegistroController.findRegisterid);
router.get("/registros", RegistroController.searchRegistername);
router.put("/registro/:id", validate(updateRegister), RegistroController.updadeRegister);
router.delete("/registro/:id", RegistroController.deleteRegister);

export default router;

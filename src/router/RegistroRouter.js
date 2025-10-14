import express from "express";
import RegistroController from "../controller/RegistroController.js";
import { authentication } from "../middlewares/AuthMiddleware.js";
import validate from "../ middlewares / ReqTypeValidation.js"
import { createRegister, updateRegister } from "../utils/RegistroShema.js"

const router = express.Router();


router.post("/registro", authentication, validate(createRegister), RegistroController.registerEvento);
router.get("/registro/:id", authentication, RegistroController.findRegisterid);
router.get("/registros", authentication, RegistroController.searchRegistername);
router.put("/registro/:id", authentication, validate(updateRegister), RegistroController.updadeRegister);
router.delete("/registro/:id", authentication, RegistroController.deleteRegister);

export default router;

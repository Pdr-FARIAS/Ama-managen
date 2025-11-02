import express from "express";
import UserController from "../controller/UserController.js";
import { authentication } from "../middlewares/AuthMiddleware.js";
import { verifyUserPermission } from "../middlewares/PermissionMiddleware.js";
import validate from "../middlewares/ReqTypeValidation.js";
import { updateUser, createUser, login } from "../utils/userShema.js";
import { verifyUserAlreadyExist } from "../utils/Validation.js";

const router = express.Router();

router.post("/login", validate(login), UserController.login);
router.post("/register", validate(createUser), verifyUserAlreadyExist, UserController.registerUser);
router.get("/:id", authentication, verifyUserPermission, UserController.getUser);
router.get("/", authentication, UserController.getAllUsers)
router.get("/email/:email", authentication, UserController.getUserByEmail);
router.put("/", authentication, validate(updateUser), UserController.updateUser);
router.delete("/user/:id", authentication, verifyUserPermission, UserController.deleteUser);

export default router;

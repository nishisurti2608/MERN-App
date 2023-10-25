import express from "express";
import { registerController,loginController } from "../controller/authController.js";

//router object

const router = express.Router();

//routing

//Register method POST

router.post("/register", registerController);

//Login method POST

router.post("/login", loginController);

export default router;

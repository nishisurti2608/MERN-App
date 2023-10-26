import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controller/authController.js";

import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";

//router object

const router = express.Router();

//routing

//Register method POST

router.post("/register", registerController);

//Login method POST

router.post("/login", loginController);

// test Route

router.get("/test", requireSignIn, isAdmin, testController);

export default router;

import express from "express";
import { registerUser } from "../controllers/registerController";
import { authenticateUser } from "../controllers/loginController";
import { logoutUser } from "../controllers/logoutController";
import { getUser } from "../controllers/userController";
import { initialAuthenticate } from "../controllers/initJwtAuthController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authenticateUser);
router.post("/logout", logoutUser);
router.get("/:id", getUser);
router.post("/initialCheck", initialAuthenticate);

export default router;

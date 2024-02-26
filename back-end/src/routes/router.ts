import express from "express";
import { registerUser } from "../controllers/registerController";
import { authenticateUser } from "../controllers/loginController";
import { logoutUser } from "../controllers/logoutController";
import { getUser } from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authenticateUser);
router.post("/logout", logoutUser);
router.get("/:id", getUser);

export default router;

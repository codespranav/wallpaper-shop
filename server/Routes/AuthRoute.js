import express from "express"
import { forgotPasswordController, loginController, registerController, resetPasswordController } from "../Controllers/UserAuthController.js";

const router = express.Router();

// authentication route
router.post("/register", registerController )
router.post("/login", loginController )
// forgot password
router.post("/forgot-password", forgotPasswordController)

// reset password
router.post("/reset-password/:id/:token", resetPasswordController)

export default router;
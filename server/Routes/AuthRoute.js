import express from "express"
import { forgotPasswordController, loginController, registerController, resetPasswordController } from "../Controllers/UserAuthController.js";
import AuthModel from "../Models/AuthModel.js";
import { isAdmin, loggedInRequired } from "../middlewares/authMiddleware.js";

const router = express.Router();

// authentication route
router.post("/register", registerController )
router.post("/login", loginController )
// forgot password
router.post("/forgot-password", forgotPasswordController)

// reset password
router.post("/reset-password/:id/:token", resetPasswordController)


//protected user route

router.get("/user-auth", loggedInRequired, isAdmin, async(req, res)=>{
    try {
        return res.status(200).send({success: true, message: "Admin Logged in"})
    } catch (error) {
        console.log(error)
    }
})
export default router;
import express from "express"
import { addNewCategory } from "../Controllers/CategoryController.js";
import { isAdmin, loggedInRequired } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add-category", loggedInRequired, isAdmin, addNewCategory)



export default router;
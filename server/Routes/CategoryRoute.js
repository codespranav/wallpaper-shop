import express from "express"
import { addNewCategory, deleteCategory, editCategory, viewCategory } from "../Controllers/CategoryController.js";
import { isAdmin, loggedInRequired } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add-category", loggedInRequired, isAdmin, addNewCategory)

// view category
router.get("/view-category", viewCategory)

//edit category
router.put("/edit-category/:cid", loggedInRequired, isAdmin, editCategory)
//delete category
router.delete("/delete-category/:cid", deleteCategory)


export default router;
import express from "express"
import { addWallpaper } from "../Controllers/WallpaperController.js";
import { isAdmin, loggedInRequired } from "../middlewares/authMiddleware.js";


const router = express.Router();
// add wallpaper
router.post("/add-wallpaper", loggedInRequired, isAdmin, addWallpaper)





export default router;
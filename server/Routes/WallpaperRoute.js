import express from "express"
// import { isAdmin, loggedInRequired } from "../middlewares/authMiddleware";
import { addWallpaper, getWallpaperController } from "../Controllers/WallpaperController.js";

import upload from "../middlewares/wallpaperMiddleware.js";

const router = express.Router();

// add wallpaper
router.post("/add-wallpaper",  upload.single("image"), addWallpaper)


// get wallpaper
router.get("/get-wallpaper", getWallpaperController)






export default router;
import mongoose from "mongoose";
import Wallpaper from "../Models/WallpaperModel.js";

export const addWallpaper = async (req, res)=>{
    try {
        const {title, description, category, tags} = req.body;
        // Check if all required fields are provided
        if (!title || !description || !category || !tags) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if the category provided is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(category)) {
            return res.status(400).json({ success: false, message: "Invalid category ID" });
        }
        const newWallpaper = new Wallpaper({
            title, description, category, tags
        })
        await newWallpaper.save();
        res.json({
            success:true,
            message: "Wallpaper added"
        })
    } catch (error) {
        console.log(error)
        res.send({success: false, message: "something went wrong"})
    }
}
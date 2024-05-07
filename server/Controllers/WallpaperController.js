import WallpaperModel from "../Models/WallpaperModel.js";


export const addWallpaper = async (req, res) => {
    try {
        const {fileName, fileDesc} = req.body
        const file = req.file 
        const newData = {
            fileName, fileDesc, file: file.filename
        }

        console.log(file)
        const newWallpaper = new WallpaperModel(newData);
        newWallpaper.save()
        .then(()=>{res.json("Wallpaper Added")})
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

export const getWallpaperController = async (req, res) => {
    try {
        const wallpapers = await WallpaperModel.find({});
        res.json(wallpapers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

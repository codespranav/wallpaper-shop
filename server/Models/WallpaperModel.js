import mongoose from "mongoose";
const Schema = mongoose.Schema;
const WallpaperSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    fileDesc: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true // Make file field required
    }
});

export default mongoose.model("Wallpaper", WallpaperSchema);

import mongoose from 'mongoose';

const WallpaperSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category' // Assuming 'Category' is the name of your category model
    },
    tags: {
        type: [String] // Array of strings representing tags
    }
});

const Wallpaper = mongoose.model('Wallpaper', WallpaperSchema);

export default Wallpaper;

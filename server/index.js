import express from "express"
import cors from "cors"
import { connectToDB } from "./db/db.js";
import dotenv from "dotenv"
import AuthRoute from "./Routes/AuthRoute.js"
import WallpaperRoute from "./Routes/WallpaperRoute.js"
import CategoryRoute from "./Routes/CategoryRoute.js"
dotenv.config();
const port = process.env.PORT 
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static('uploads'))
app.use("/api/auth", AuthRoute);
app.use("/api/wallpaper", WallpaperRoute)
app.use("/api/category", CategoryRoute)

 connectToDB()
 .then(()=>{
    app.listen(port, ()=>{
        console.log(`\napp is listening on port http://localhost:${port}`);
    })
 }).catch((err)=>{
    console.error("Database connection error:", err);

 })
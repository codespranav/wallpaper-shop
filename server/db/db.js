import mongoose from "mongoose";
import dotenv from "dotenv"
import { DB_NAME } from "../constant.js";

dotenv.config();

export const connectToDB = async ()=>{
    const MONGO_URI = await process.env.MONGO_DB_URI;
    const connectionInstance = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
    console.log(`\n mongodb connection established ${connectionInstance.connection.host}/${DB_NAME}`)

}
import JWT from "jsonwebtoken"
import AuthModel from "../Models/AuthModel.js";
export const loggedInRequired = async (req, res, next)=>{
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.send({
                success: false,
                message: "Logged in required"
            })
        }
        const decode = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error)
    }
}

export const isAdmin = async (req, res, next)=>{
    try {
        const user = await AuthModel.findById({_id: req.user._id})
        if(user.role != 1){
            return res.json({
                success: false,
                message: "Unauthorized Access"
            })
        }
        next();
    } catch (error) {
        console.log(error)
    }
}
import { comparePassword, hashPassword } from "../helper/auth-helper.js";
import UserModel from "../Models/AuthModel.js"
import jwt, { decode } from "jsonwebtoken"
import nodemailer from "nodemailer"
export const registerController = async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
  
      // Check if all required fields are provided
      if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: "Invalid email address" });
      }
  
      // Validate password strength (example: at least 8 characters long)
      if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
      }
  
      const isUser = await UserModel.findOne({ email });
  
      // Check if user already exists
      if (isUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists with this email address",
        });
      }
  
      // Hash the password
      const hashedPassword = await hashPassword(password);
  
      // Save the user
      const user = await new UserModel({
        name,
        email,
        password: hashedPassword,
        role, // Assuming role is provided in the request body
      }).save();
  
      res.status(201).json({
        success: true,
        message: "Account created successfully",
        userData: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
        message: "Error in registration",
      });
      console.error(error)
    }
  };
  

export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
  
      if(!email || !password){
          return res.status(404).send({
              success: false, 
              message: "Invalid email or password"
          });
      }
  
      if(!user){
          return res.status(404).send({
              success: false, 
              error: "Email is not registered"
          })
      }
  
      const match = await comparePassword(password, user.password);
      if(!match){
          return res.status(200).send({
              success: false,
              message: "Invalid Password"
          })
      }
      // Token
      const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
          expiresIn: "80d"
      });
  
      return res.status(200).send({
          success: true, 
          message: "Logged in successfull",
          user: {
              name: user.name, 
              email: user.email,
              role: user.role
          },
          token: token
  
      })
    } catch (error) {
          res.json({
              error: "Error" + error
          })
    }
  };

  // forgot password controller

  export const forgotPasswordController = async (req, res)=>{
    try {
      const {email} = req.body;
      const user = await UserModel.findOne({email: email});
      if(!user){
        return res.status(404).json({
          success: false,
          message: "User not found"
        })
      }
      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_EMAIL_PASSWORD
        }
      });
      
      const mailOptions = {
        from: process.env.USER_EMAIL,
        to: user.email,
        subject: 'WALIFY: Reset your password',
        text: `http://localhost:5173/reset-password/${user._id}/${token}`
    };
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return res.json({ success: true });
} catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
        success: false,
        message: 'An error occurred while sending the email'
    });
}
};


// reset password 
import { promisify } from 'util';

export const resetPasswordController = async (req, res) => {
    try {
        const { id, token } = req.params;
        const { password } = req.body;

        const verifyAsync = promisify(jwt.verify);
        const decoded = await verifyAsync(token, process.env.JWT_SECRET);

        const hashedPassword = await hashPassword(password);

        await UserModel.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });
        
        res.json({ success: true, message: 'Password changed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

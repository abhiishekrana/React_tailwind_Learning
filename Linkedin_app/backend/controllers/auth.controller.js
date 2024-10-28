import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendWelcomeEmail } from "../email/emailHandlers.js";
export const signup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }
        
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({
                message: "Username already exists"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: hashPassword,
            username,
        });

        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });

        res.cookie("jwt-LinkedIn", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });

        res.status(201).json({ message: "User registered successfully" });

        const profileUrl = process.env.CLIENT_URL+"/profile/"+user.username

        try{
            await sendWelcomeEmail(user.email,user.name,profileUrl)
        }catch(error){
            console.log("Error sending welcome email",error);
        }


    } catch (email) {
        console.log("Error in signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const login = (req,res)=>{
    res.send("login")
}

export const logout = (req,res)=>{
    res.clearCookie("jwt-LinkedIn");
    res.json({message:"Logged out successfully"});
}
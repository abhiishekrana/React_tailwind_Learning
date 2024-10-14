import { user } from "../models/user_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async(req, res) => {
    console.log(req.body)
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;

        // Validate input data
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        // Check if user already exists
        const user1 = await user.findOne({ email });
        if (user1) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create user in the database
        const newUser = await user.create({
            fullName,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
        });
        // Return success response
        return res.status(200).json({
            message: "Account created successfully.",
            success: true,
        });
    } catch (error) {
        console.error(error); // Log error for debugging
        return res.status(500).json({
            message: error.message || "Internal server error",
            success: false
        });
    }
}


export const login = async(req, res) => {
    console.log(req.body);
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user1 = await user.findOne({ email });
        if (!user1) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user1.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        // Check role is correct
        if (role !== user1.role) {
            return res.status(400).json({
                message: "Please correct your role",
                success: false
            });
        }

        const tokenData = {
            userId: user1._id
        };
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user1 = {
            _id: user1._id,
            fullName: user1.fullName,
            email: user1.email,
            phoneNumber: user1.phoneNumber,
            role: user1.role,
            profile: user1.profile
        };

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user1.fullName}`,
            user1,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};



export const logout = async(req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully",
            success:true
        })
    }catch(error){
        console.log(error);
    }
}

export const updateProfile = async(req,res)=>{
    try{
        const {fullName,email,phoneNumber,bio,skills}=req.body;
        if(!fullName||!email||!phoneNumber||!bio||!skills){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }
        const skillsArray = skills.split(",");
        const userId = req.id;
        let user = await user.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"User not found",
                success:false
            })
        }
        user.fullName = fullName,
        user.email = email,
        user.phoneNumber=phoneNumber,
        user.profile.bio = bio,
        user.profile.skills=skillsArray

        await user.save();

        user={
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).json({
            message:"Profile updated successfully.",
            user,
            success:true
        })
    }catch(error){
        console.log(error)
    }
}
import { User } from "../models/user_model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export const register = async(rq,res)=>{
    try{
        const {fullName,email,phoneNumber,password,role} = req.body;
        if(!fullName||!email||!phoneNumber||!password||!role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already exists",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            fullName,
            email,
            phoneNumber,
            password:hashedPassword,
            role,

        })
    }catch(error){
        return res.status(400).json({
            message:"error",
            success:false
        })
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password,role} = req.body;
        if(!email||!password||!role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"incorrect email or password",
                success:"false"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"incorrect email or password",
                success:"false"
            })
        }
        
        //Check role is correct
        if(role!=user.role){
            return res.status(400).json({
                message:"Please correct your role",
                success:false
            })
        }

        const tokenData = {
            userId:user._id
        }
        const token=await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});
    }catch(error){
        console.log(error)
    }
}
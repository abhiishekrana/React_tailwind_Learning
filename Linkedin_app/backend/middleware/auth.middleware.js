import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async(req,res,next)=>{
    try{
        const token = req.cookies["jwt-linkedin"];
        if(!token){
            return res.status(401).json({message:"Unauthorized - No Token Provided"});
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({message:"Unauthorized - Invalid token"});
        }

        const user = await User.findBtId(decode.userId).select("-password");

        if(!user){
            return res.status(401).json({message:"User not found"});
        }

        req.user = user;
        next();
    }catch(error){
        console.log("Error in protected middleware:",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
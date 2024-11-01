import User from "../models/user.model";

export const getSuggestedConnections = async(req,res)=>{
    try{
        const currentUser = await User.findById(req.user._id).select("connections");

    }catch(error){
        
    }
}
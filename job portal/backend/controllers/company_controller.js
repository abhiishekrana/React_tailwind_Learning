import { Company } from "../models/company_model.js";

export const registerCompany = async(req,res)=>{
    try{
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required.",
                success:false
            });
        }
        let company = await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"This company already exists",
                success:false
            })
        }
        company = await Company.create({
            name:companyName,
            userId:req.id
        })
        return res.status(200).json({
            message:"Company's registered successfully",
            company,
            success:true
        })
    }catch(error){
        console.log(error)
    }
}

export const getCompany = async(req,res)=>{
    try{
        const userId = req.id;//loggedIn userid
        const companies = await Company.find({userId});
        if(!companies){
            return res.status(404).json({
                message:"companies not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"all companies",
            companies,
            success:true
        })
    }catch(error){
        console.log(error)
    }
}

export const getCompanyById = async(req,res)=>{
    try{
        const companyId = req.params.id;
        const  company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message:"companies not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"all companies",
            company,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}

export const updateCompany = async(req,res)=>{
    try{
        const {name,description,website,location} = req.body;
        const file = req.file;
        //cloudinary

        const updateDate = {name,description,website,location};
        const company = await Company.findByIdAndUpdate(req.params.id, updateDate,{new:true});

        if(!company){
            return res.status(404).json({
                message:"companies not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Company info updated successfully",
            company,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}
import {Job} from "../models/job_model.js"
export const postJob = async(req,res)=>{
    try{
        const {title,descriptions,jobType,salary,location,experience,position,companyId,experienceLevel} = req.body;
        const userId = req.id;
        if(!title||!descriptions||!requiremets||!salary||!location||!jobType||!experience||!position||!companyId||!experienceLevel){
            return res.status(400).json({
                message:"Something is missing.",
                success:false
            })
        }   
        const job = await Job.create({
            title,
            descriptions,
            requirements,
            salary:Number(salary),
            location,
            jobType,
            experienceLevel,
            company:companyId,
            created_by:userId
        });
        return res.status(200).json({
            message:"Job created successfully",
            job,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}   


export const getAllJobs = async(req,res)=>{
    try{
        const keyword = req.query.keyword||"";
        const query = {
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {descriptions:{$regex:keyword,$options:"i"}},
            ]
        };
        const jobs = await Job.find(query)
        if(!jobs){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })

    }catch(error){
        console.log(error); 
    }
}

export const getJobById = async(req,res)=>{
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({
            job,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}

export const getAdminJobs = async(req,res)=>{
    try{
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(404).json({
                message:"Jobs are not found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    }catch(error){
        consol.log(error);
    }
}
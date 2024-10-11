import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

// app.get("/home",(req,res)=>{
//    return res.status(200).json({
//     message:"I am coming from backend..",
//     success:true
//    })
// })

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
const corsOptions = {
    origin:'https//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));
const PORT = 3000;
app.listen(PORT,(req,res)=>{
    console.log(`serever is run on ${PORT}`);
})
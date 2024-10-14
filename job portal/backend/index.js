import express from "express";
import userRoute from "./routes/user_route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
dotenv.config({});

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

app.use("/api/v1/user",userRoute);
const PORT = process.env.PORT||3000;
app.listen(PORT,(req,res)=>{
    connectDB();
    console.log(`serever is run on ${PORT}`);
})
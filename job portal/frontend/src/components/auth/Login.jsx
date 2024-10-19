import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup} from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
const Login = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }

  const changeFileHandler = (e)=>{
    setInput({...input,file:e.target.files?.[0]});
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <form
          onSubmit=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
       
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="abhishek@123" />
          </div>
       
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-5">
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="Student"
                className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="Recruter"
                className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            
          </div>
          <Button type="submit" className="w-full my-4">Login</Button>
          <span>Don't have an account?<Link to="/signup" className="text-blue-600">Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;

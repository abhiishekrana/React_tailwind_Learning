import React, { useState } from "react";
import {z} from "zod";

const loginSchema = z.object({
    email:z.string().email('Invalid email address'),
    password:z.string().min(6,"Password must be atleat 6 characters")
})

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };
  const [error,setError] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);
    if(!result.success){
        const errorField = result.error.formErrors.fieldErrors;
        setError(errorField);
        return;
    }
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center w-full h-[85vh] bg-gray-200">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 bg-white p-10 rounded-md w-[30%]"
        action=""
      >
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-md border border-gray-700"
          value={formData.email}
          name="email"
          onChange={changeHandler}
          // onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-md border border-gray-700"
          value={formData.password}
          name="password"
          onChange={changeHandler}
          // onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="p-2 rounded-md bg-purple-600 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

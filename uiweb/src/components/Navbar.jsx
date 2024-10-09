import React,{useState,useEffect} from 'react'
// import './Navbar.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  const[light,setLight] = useState("Light")
  const toggle=()=>{
    if(light=="Light"){
      setLight("Dark")
    }else{
      setLight("Light")
    }
  }

  useEffect(()=>{
    console.log("useEffect called");
    
  },[])
  return (
    
    <div className="flex justify-between mx-10 shadow-md my-10">
      <h1 className='font-bold text-2xl'>AJIO</h1> 
      <ul className='flex justify-between w-[40%]'>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li>Women</li>
        <li><Link to = "/kid">Kids</Link></li>
        <li>Cart</li>
        <button className="bg-purple-600 px-6 py-1 rounded-md text-white" onClick={toggle}>{light}</button>
      </ul>
    </div>
  )
}

export default Navbar

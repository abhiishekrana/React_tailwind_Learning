import React,{useState,useEffect} from 'react'
import './Navbar.css'
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
    
    <div className='navbar'>
      <h1>LOGO</h1>
      <ul className='menu_items'>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>Women</li>
        <li><Link to = "/kid">Kids</Link></li>
        <li>Cart</li>
        <button onClick={toggle}>{light}</button>
      </ul>
    </div>
  )
}

export default Navbar

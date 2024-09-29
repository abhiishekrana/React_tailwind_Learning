import React,{useState} from 'react'
import './Navbar.css'
const Navbar = () => {
  const[light,setLight] = useState("Light")
  const toggle=()=>{
    if(light=="Light"){
      setLight("Dark")
    }else{
      setLight("Light")
    }
  }
  return (
    
    <div className='navbar'>
      <h1>LOGO</h1>
      <ul className='menu_items'>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Cart</li>
        <button onClick={toggle}>{light}</button>
      </ul>
    </div>
  )
}

export default Navbar

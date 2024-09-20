import React from 'react'
import { useNavigate } from 'react-router-dom'
const AboutUs = () => {
    const navigate = useNavigate()

    const goToNavigate=()=>{
        navigate("/")
    }
  return (
    <div>
      <h1>Welcome to About</h1>
      <button onClick={goToNavigate}>Go to home</button>
    </div>
  )
}

export default AboutUs

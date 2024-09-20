import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    const navigate = useNavigate()

    const goToNavigate=()=>{
        navigate("/about")
    }
  return (
    <div>
      <h1>Welcome to contact page</h1>
      <button onClick={goToNavigate}>Go to about page</button>
    </div>
  )
}

export default Contact

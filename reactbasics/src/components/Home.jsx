import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()

    const goToNavigate=()=>{
        navigate("/contact")
    }
  return (
    <div>
      <h1>Welcoe to the home page</h1>
      <button onClick={goToNavigate}>Go to contact page</button>
    </div>
  )
}

export default Home

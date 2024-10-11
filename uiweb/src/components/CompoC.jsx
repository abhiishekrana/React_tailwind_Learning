import React, { useContext } from 'react'
import UserContest from '../utils/UserContext'

const CompoC = () => {
    const user = useContext(UserContest)
    console.log(user)
  return (
    <div className='border border-black'>
      <h1>User Detail</h1>
      <h2>Name:{user.name}</h2>
      <h2>Email:{user.email}</h2>
    </div>
  )
}

export default CompoC

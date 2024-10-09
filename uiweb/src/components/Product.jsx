import React from 'react'
// import './Product.css'
const Product = (props) => {
  const{image,rating,price,title} = props.itsMyChoice
  return (
    <div className='flex flex-col items-center justify-center border border-gray-600 h-96 p-4 hover:bg-gray-200'>
      
    <img className='w-40' src={image}/>
    <h1>{title}</h1>
    <p>rating:{rating.rate}</p>
    <p>price:{price}</p>
    </div>
  )
}

export default Product

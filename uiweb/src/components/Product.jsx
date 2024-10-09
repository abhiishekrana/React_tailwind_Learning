import React from 'react'
// import './Product.css'
const Product = (props) => {
  const{image,rating,price,title} =props.product
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




export const HOF = (Product)=>{
  return (props)=>{
    return(
      <div className='relative'>
        <span className='absolute -left-2 -top-2 bg-black text-white px-4 py-2 rounded-md'>Best Seller!</span>
        <Product {...props}/>
      </div>
    )
  }
}





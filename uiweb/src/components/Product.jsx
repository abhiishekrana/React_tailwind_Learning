import React from 'react'
import './Product.css'
const Product = (props) => {
  const{image,rating,price,title} = props.itsMyChoice
  console.log("props->",props)
  return (
    <div className='product'>
      
    <img className='product_img' src={image}/>
    <h1>{title}</h1>
    <p>rating:{rating.rate}</p>
    <p>price:{price}</p>
    </div>
  )
}

export default Product

import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useSingleProduct from '../hook/useSingleProduct';
import { addItems,removeItems,clearItems } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
const ProductDeatail = () => {

    // const[singleProduct,setSingleProduct] = useState(null);
    const  productId= useParams();    console.log("productId",productId)
    const project_id = productId.id;
    // useEffect(() => {
    //     fetchData();
    //   }, []);
    
    //   const fetchData = async () => {
        
    //       const data = await fetch(`https://fakestoreapi.com/products/${productId.id}`);
    //       const resData = await data.json();
    //      setSingleProduct(resData)
    //   };
    const singleProduct=useSingleProduct(project_id)
    const dispatch = useDispatch();

    if(singleProduct===null){
        return <h1>Loading...</h1>
    }

    const{image,title,description,price} = singleProduct

    const addCartItem =()=>{
      dispatch(addItems(singleProduct));
    }

    const removeCartItem=()=>{
      dispatch(removeItems());
    }

    const clearItem=()=>{
      dispatch(clearItems());
    }

  return (
    <div className='max-w-5xl mx-auto mt-10'>
      <div className='border border-gray-600 rounded-md p-5'> 
    <img className='w-32' src={image}/>
    <h1 className='font-bold text-xl'>{title}</h1>
    <p className='font-bold text-gray-700'>price:{singleProduct.price}</p>
    <p >{description}</p>
    <h2 className='font-bold text-gray-700'>Product details Page</h2>
    <button onClick={addCartItem} className='bg-purple-700 text-white rounded-md mt-1 p-1'>Add To Cart</button>
    <button onClick={removeCartItem} className='bg-purple-700 text-white rounded-md mt-1 p-1 ml-2'>Remove to Cart</button>
    <button onClick={clearItem} className='bg-purple-700 text-white rounded-md mt-1 p-1 ml-2'>Clear all Cart</button>


    </div>
    </div>
    
  );
}

export default ProductDeatail

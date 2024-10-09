import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useSingleProduct from '../hook/useSingleProduct';

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

    if(singleProduct===null){
        return <h1>Loading...</h1>
    }

    const{image,title,description,price} = singleProduct

  return (
    <div className='flex flex-col items-center justify-center border border-gray-600 h-96 p-4 hover:bg-gray-200'>
            
    <img className='w-40' src={image}/>
    <h1>{title}</h1>
    <p>price:{singleProduct.price}</p>
    <p>{description}</p>
    <h2>Product details Page</h2>
    </div>
  );
}

export default ProductDeatail

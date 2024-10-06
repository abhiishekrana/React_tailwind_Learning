import { useState, useEffect } from "react";

const useSingleProduct = (project_id) => {
    const [singleProduct, setSingleProduct] = useState(null);
    
    useEffect(() => {
        fetchSingleProduct();
    }, [project_id]); // Depend on productId so it refetches when productId changes

    const fetchSingleProduct = async () => {
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${project_id}`);
            const jsonData = await data.json();
            setSingleProduct(jsonData);  // Set the fetched product
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    return singleProduct;  // Return the product to be used by the component
};

export default useSingleProduct;

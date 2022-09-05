import {useEffect, useState} from 'react';
import productsService from "../services/productsService";

const useProducts = () => {
 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsService.fetchAll().then(products => {
        
           console.log(products);
            setProducts(products);
        });
      
    }, []);

    return {
        products: products,
     
    };
}

export default useProducts;

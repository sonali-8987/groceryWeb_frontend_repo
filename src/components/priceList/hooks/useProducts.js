import { useEffect, useState } from 'react';
import productsService from "../services/productsService";

const useProducts = () => {
    const [products, setProducts] = useState();
    const [reload,setReload] = useState(true);

    useEffect(() => {

       
        productsService.fetchAll().then(products => {

            setProducts(products);
           
        }).catch((error) => {
            console.log(error);

        });

       
    },[reload]);

    return {
        products: products,
        reload: reload,
        setReload: setReload

    };
}

export default useProducts;

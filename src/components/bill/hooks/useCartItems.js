import { useEffect, useState } from 'react';
import cartService from "../services/cartService";


const useCartItems = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        cartService.fetchAll().then(items => {

            setCartItems(items);
        });

    }, []);

    return {
        cartItems: cartItems,

    };
}

export default useCartItems;

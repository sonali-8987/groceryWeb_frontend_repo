import cartService from "../services/cartService";


const useAddToCartProduct = () => {

    const handleAddToCartProduct = async (payload) => {
        var response;
        try {
            cartService.create(payload).then((responseData) => {
                response = responseData;
                window.location.reload(true);

                return response.data;

            });

        } catch (err) {


        }
    };

    return {
        handleAddToCartProduct: handleAddToCartProduct,
    };
};

export default useAddToCartProduct;

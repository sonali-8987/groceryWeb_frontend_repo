import productsService from "../services/productsService";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

const useAddProduct = () => {

    const [showSuccessMessage, setShowsuccessMessage] = useState(false);

    const handleClose = () => {
        setShowsuccessMessage(false);
    };

    const successMessage = () => {
        if (showSuccessMessage) {

            return (

                <Snackbar open={showSuccessMessage} autoHideDuration={4000} onClose={handleClose}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Product Added Successfully!
                    </Alert>
                </Snackbar>

            );
        }

    };

    const handleAddProduct = async (payload) => {
        var response;
        try {
            productsService.create(payload).then((responseData) => {

                response = responseData;
                setShowsuccessMessage(true);
                return response.data;

            });

        } catch (err) { }
    };

    return {
        handleAddProduct: handleAddProduct,
        successMessage: successMessage,
    };
};

export default useAddProduct;
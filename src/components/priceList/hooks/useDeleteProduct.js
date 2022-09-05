import { useEffect, useState } from 'react';
import productsService from "../services/productsService";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

const useDeleteProduct = () => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleClose = () => {
        setShowSuccessMessage(false);
    };

    const successMessage = () => {
        if (showSuccessMessage) {

            return (

                <Snackbar open={showSuccessMessage} autoHideDuration={4000} onClose={handleClose}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Product Removed Successfully!
                    </Alert>
                </Snackbar>

            );
        }

    };

    const deleteProduct = async (id) => {
        var response;
        try {
            productsService.delete(id).then((responseData) => {

                response = responseData;
                setShowSuccessMessage(true);
                window.location.reload(true);
                return response.data;

            });

        } catch (err) { }
    };

    return {
        deleteProduct: deleteProduct,
        successMessage: successMessage,
    };

}

export default useDeleteProduct;

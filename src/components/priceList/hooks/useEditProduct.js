import productsService from "../services/productsService";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

const useEditProduct = () => {

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

    const handleEditProduct = async (payload) => {
        var response;
        try {
            productsService.edit(payload).then((responseData) => {

                response = responseData;
                setShowsuccessMessage(true);
                window.location.reload(true);
                return response.data;

            });

        } catch (err) { }
    };

    return {
        handleEditProduct: handleEditProduct,
        successMessage: successMessage,
    };
};

export default useEditProduct;
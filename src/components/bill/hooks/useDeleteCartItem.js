import { useEffect, useState } from 'react';
import cartService from "../services/cartService";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

const useDeleteCartItem = () => {

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

    const deleteCartItem = async (id) => {
        var response;
        try {
            cartService.delete(id).then((responseData) => {

                response = responseData;
                setShowSuccessMessage(true);
                window.location.reload(true);
                return response.data;

            });

        } catch (err) { }
    };

    return {
        deleteCartItem: deleteCartItem,
        successMessage: successMessage,
    };

}

export default useDeleteCartItem;
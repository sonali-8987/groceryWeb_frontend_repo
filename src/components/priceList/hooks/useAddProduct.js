import productsService from "../services/productsService";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import useProducts from "./useProducts";


const useAddProduct = () => {

    const [showSuccess, setShowSuccess] = useState("");
    const [showMessage, setShowMessage] = useState("");
    const [save, setSave] = useState(false);
    const {reload,setReload} = useProducts();


    const handleClose = () => {
       window.location.reload(true);
        setSave(false);
       

    };

    const message = () => {

        if (save) {
            return (
                <Snackbar open={true} autoHideDuration={1000} onClose={handleClose}>
                    <Alert severity={showSuccess} sx={{ width: '100%' }}>
                        {showMessage}
                    </Alert>
                </Snackbar>
            );
        }
    };



    const handleAddProduct = async (payload) => {
        var response;

        productsService.create(payload)
        .then((responseData) => {

            response = responseData;

            setShowMessage("Product Added Successfully");
            setShowSuccess("success");
            setReload(!reload);
            return response.data;

        }).catch((error) => {

            setShowMessage(error.response.data);
            setShowSuccess("error");

        });
        
        setSave(true);

    };

    return {
        handleAddProduct: handleAddProduct,
        message: message,
        save: save,
        setSave: setSave
    };
};

export default useAddProduct;
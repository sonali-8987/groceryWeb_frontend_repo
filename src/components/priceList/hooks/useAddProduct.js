import productsService from "../services/productsService";
import styles from "../styles/addProductDialogStyles";
import { useState } from "react";
import { Alert } from "@material-ui/lab";

const useAddProduct = () => {

    const classes = styles();

    const handleAddProduct = async (payload) => {
        var response;
        try {
            productsService.create(payload).then((responseData) => {
                response = responseData;
            });

            return response.data;
        } catch (err) { }
    };

    return {
        handleAddProduct: handleAddProduct,
    };
};

export default useAddProduct;
import { Typography, Button } from "@material-ui/core";
import styles from "./styles/priceListStyles";
import { React, useState } from "react";


const PriceList = () => {
    const classes = styles();


    return (

        <div className={classes.priceListContainer}>

            <Button
                id="addProductButton"
                variant="contained"
                color="primary"
                className={classes.addProductButton}
            >
                <Typography className={classes.addProductText}>
                    ADD PRODUCT
                </Typography>
            </Button>
        </div>

    )

};
export default PriceList;
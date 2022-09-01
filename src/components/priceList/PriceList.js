import { Container } from "@material-ui/core";
import React from "react";
import styles from  "./styles/priceListStyles";

const PriceList = () => {
    const classes = styles();

    return(
       
        <Container className={classes.priceListContainer}>
            <h1>priceList page</h1>
        </Container>
     
    )

};
export default PriceList;
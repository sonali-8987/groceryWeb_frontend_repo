import { Container } from "@material-ui/core";
import React from "react";

import styles from "./styles/billStyles"

const Bill = () => {
    const classes = styles();
    return (
        <Container className={classes.billContainer}> <h1>Bill</h1></Container>
    )
}

export default Bill;
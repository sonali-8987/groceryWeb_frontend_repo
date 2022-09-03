import { Container } from "@material-ui/core";
import React from "react";
import styles from "./styles/errorStyles";

const Error = () => {
    const classes = styles();

    return (

        <Container className={classes.errorContainer}>
            <h1>oops something went wrong</h1>
        </Container>

    )

};
export default Error;
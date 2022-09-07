import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import logo from "./grocery1.png"
import { Box, Container } from "@material-ui/core";
import { ClassNames } from "@emotion/react";
import styles from "./styles/homeStyles";


const Home = () => {
    const classes = styles();

    return (
       <Box className={classes.homepage}>
         <img src = {logo} alt = "daily needs"/>
       </Box>
        
    )
}

export default Home;
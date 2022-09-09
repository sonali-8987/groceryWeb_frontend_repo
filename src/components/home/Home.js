import React from "react";
import logo from "./grocery1.png"
import { Box, } from "@material-ui/core";
import styles from "./styles/homeStyles";


const Home = () => {
  const classes = styles();

  return (
    <Box className={classes.homepage}>
      <img src={logo} alt="daily needs" />
    </Box>

  )
}

export default Home;
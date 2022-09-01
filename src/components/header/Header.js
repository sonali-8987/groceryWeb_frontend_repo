import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles/headerStyles";

const Header = () => {
    const classes = styles();

    return (
     
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.header}>DailyNeeds</Typography>

                    <div className={classes.pages}>
                        <a href="priceList" className={classes.priceListLink}>
                            <Typography className={classes.priceList}>Price List </Typography>
                        </a>
                        <a href="/bill" className={classes.billLink}>
                            <Typography className={classes.bill}>Bill</Typography>
                        </a>
                    </div>

                </Toolbar>
            </AppBar>
          
      
    );
};
export default Header;
import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles/headerStyles";
import { BrowserRouter, Link } from 'react-router-dom';


const Header = () => {
    const classes = styles();

    return (
        <BrowserRouter>

            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.header}>DailyNeeds</Typography>

                    <div className={classes.pages}>
                        <Link to="/priceList" className={classes.priceListLink}>
                            <Typography className={classes.priceList}>Price List </Typography>
                        </Link>
                        <Link to="/" className={classes.billLink}>
                            <Typography className={classes.bill}>Bill</Typography>
                        </Link>
                    </div>

                </Toolbar>
            </AppBar>
        </BrowserRouter>
    );
};
export default Header;
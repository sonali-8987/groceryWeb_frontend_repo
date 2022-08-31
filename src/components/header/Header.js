import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles/headerStyles";


const Header = () => {
    const classes = styles();

    const PriceListSection = () => {
        return (
            <a href="/" className={classes.priceListLink} >
                <Typography className={classes.priceList}>
                    Price List
                </Typography>
            </a>
        )

    };

    const BillSection = () => {
        return (
            <a href="/" className={classes.billLink}>
                <Typography className={classes.bill}>
                    Bill
                </Typography>
            </a>
        )

    };

    return (
        <AppBar className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.header}>DailyNeeds</Typography>
                <div className={classes.pages}>
                    {PriceListSection()}
                    {BillSection()}
                </div>

            </Toolbar>
        </AppBar>
    )
};
export default Header;
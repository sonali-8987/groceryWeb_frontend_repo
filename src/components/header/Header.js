import { React } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles/headerStyles";
import { Link } from 'react-router-dom';
import logo from "./logo/grocery.png";

const Header = () => {
    const classes = styles();


    return (

        <>
            <AppBar >
                <Toolbar className={classes.toolbar}>
                    <div className={classes.headerTitle}>
                        <Avatar src={logo}></Avatar>
                        <Link to="/" className={classes.linkStyle}>
                            <Typography className={classes.header}>DailyNeeds</Typography>
                        </Link>
                    </div>
                    <div className={classes.pages}>
                        <Link to="/priceList" className={classes.linkStyle} >
                            <Button className={classes.priceList} >
                                Price List
                            </Button>
                        </Link>

                        <Link to="/bill" className={classes.linkStyle}>
                            <Button className={classes.bill}>Bill</Button>
                        </Link>
                    </div>

                </Toolbar>
            </AppBar>

        </>

    );
};
export default Header;
import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({

    appbar:{
        position:"fixed"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 4em",

    },
    header: {
        fontWeight: "bold",
        fontSize: "22px",
    },

    pages: {
        display: "flex",
        justifyContent: "space-between"
    },

    priceListLink: {
        alignItems: "center",
        cursor: "pointer",
        color: "white"
    },
    billLink: {
        alignItems: "center",
        cursor: "pointer",
        color: "white"
    },

    priceList: {
        color: 'white',
        fontWeight: "bold",
        fontSize: "20px",
        marginRight: "28px",

    },

    bill: {
        color: 'white',
        fontWeight: "bold",
        fontSize: "20px",

    },

})
);
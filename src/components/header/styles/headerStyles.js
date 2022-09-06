import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 4em",

    },
    header: {
        color: 'white',
        fontWeight: "bold",
        fontSize: "28px",
    },

    pages: {
        display: "flex",
        justifyContent: "space-between"
    },

    linkStyle: {
        textDecoration: "none",
    },

    priceList: {
        color: 'white',
        fontWeight: "bold",
        fontSize: "20px",
        marginRight: "28px",
        textTransform:"none",

    },

    bill: {
        color: 'white',
        fontWeight: "bold",
        fontSize: "20px",
        textTransform:"none",

    },
    
    logoStyle: {
        marginRight:"18px",
        marginTop:"5px",
        marginBottom:"5px",
        backgroundRepeat:"no-repeat"
    },
    headerTitle: {
       display:"flex"
    },

})
);
import { makeStyles } from "@material-ui/core";


export default makeStyles(() => ({

    billContainer: {
        marginTop: "100px",
        marginLeft: "0",
        display: "flex",
        justifyContent: "flex-end"
    },

    itemDropDown: {
        marginRight: "22px"
    },

    cartButton: {
        textTransform: "none",
        marginRight: "2.5em",
        height: "3.5em",
        widht: "8.5em",
    },
    empty: {
        fontWeight: "bold"
    },

    quantity: {
        marginRight: "22px"
    },
    billSection: {
        marginTop: "35px",
        textAlign: "center"
    },
    billButton: {
        textTransform: "none",
        marginRight: "18px",
        marginTop: "35px",
        width: "9em",
        height: "3em",
    },
    resetButton: {
        textTransform: "none",
        marginTop: "35px",
        marginLeft: "10px",
        width: "6em",
        height: "3em",
    },
    radioButton: {
        marginRight: "10px",
        marginTop: "-9px",
        marginBottom: "1.8em"

    },

    errormessage: {
        color: "red",
        marginTop: "-2px",
        marginBottom: "-8px"
    },

}))
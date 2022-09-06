import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({

    footer: {
        padding: "0 4em",
        background: "#41435A",
        position: "fixed",
        bottom: "0",
        left:"0",
        right:"0",
        width: "100%",
        color: "white",
        textAlign: "center",
        marginTop: "-50px"
    },

    footerText: {
        textAlign: "right",
        padding: "0 6em",
    }
}))
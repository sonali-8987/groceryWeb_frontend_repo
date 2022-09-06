import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({


  dialogRoot: {
    overflow: "hidden",
    padding: "2px 10px 20px 7px",
    width: "20em",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    width: "20em",
  },
  dialogHeader: {
    fontWeight: "bold",
    padding: "10px 0px 20px 10px",
  },

  dialogCloseIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeIconColor: {
    color: "black",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "row",
  },
  dialogMain: {
    display: "flex",
    padding: "10px 20px 20px 15px",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "85%",
    maxWidth: "85%",
  },

  item: {
    fontWeight: "bold",
    marginTop: "3%",
    marginBottom: "2%",
  },

  dialogBottom: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "5px 0px 0px 0px",
    marginTop: "20px",
    marginRight: "auto",
    width: "8em",
    
  },

  successPopup: {
    marginTop: "350px",
    justifyContent: "left",
  },
  errormessage: {
    color: "red",
    marginTop: "-2px",
    marginBottom: "-8px"
  },
  dialogButton:{
    textTransform:"none",
    marginRight: "auto",
  }


})
);
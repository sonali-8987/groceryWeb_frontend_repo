import { Button, Dialog, Typography } from "@material-ui/core";
import React from "react";
import styles from './styles/addProductDialogStyles';
import { MenuItem } from "@material-ui/core";
import { Select, Input, InputLabel, FormControl, Collapse } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import PropTypes from "prop-types";
import useAddProduct from "./hooks/useAddProduct";
import { TextField } from "@material-ui/core";


const AddProductDialog = ({
    open,
    allCategory,
    onClose,

}) => {
    const classes = styles();

    const { handleAddProduct, successMessage } = useAddProduct();


    const [alertOpen, setAlertOpen] = React.useState(false);
    const [category, setCategory] = React.useState([]);
    const [cost, setCost] = React.useState();
    const [item, setItem] = React.useState("");

    const [itemError, setItemError] = React.useState(null);
    const [costError, setCostError] = React.useState(null);


    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const itemValid = new RegExp("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$");

    const handleItemValidation = (event) => {
        if (!itemValid.test(event.target.value)) {
            setItemError('item is invalid');
        } else {
            setItemError(null);
        }
        setItem(event.target.value);
    };

    const costValid = /^[1-9](\d+(\.\d{0,2})?|\.?\d{1,2})$/;

    const handleCostChange = (event) => {
        if (!costValid.test(event.target.value)) {
            setCostError('Price is invalid');
        } else {
            setCostError(null);
        }
        setCost(event.target.value);
    };

    const handleClose = () => {
        setCategory("");
        setItem("");
        setCost();
        setAlertOpen(false);
        onClose();
    };

    const onSaveButtonClick = () => {

        if (category === null || item === null || cost == null)
            setAlertOpen(true);
        else {

            const productDetail = {
                item: item,
                price: cost,
                category_id: category
            };

            if (category !== null && item !== null && cost !== null && itemError === null && costError === null) {
                handleAddProduct(productDetail);
            }


            setCategory("")
            setCost();
            setItem("");
            setAlertOpen(false);
        }

    }


    return (
        <>
            <Dialog open={open}
                onClose={handleClose}
                fullWidth
                classes={{
                    paper: classes.dialogRoot,
                }}
            >

                <div className={classes.container}>
                    <Typography variant="h6" className={classes.dialogHeader}>
                        Add Product
                    </Typography>
                    <div className={classes.dialogContent}>
                        <div className={classes.dialogMain}>
                            <FormControl variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                                <Select
                                    id="simple-select-standard"
                                    value={category}
                                    onChange={handleChange}
                                    data-testid="dropDownId"
                                    MenuProps={{
                                        classes: { paper: classes.menuPaper }, anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left"
                                        },
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "left"
                                        }, getContentAnchorEl: null
                                    }}
                                >
                                    {allCategory.map((category, index) => (

                                        <MenuItem
                                            key={index}
                                            value={category.id}
                                            id="categoryInList"
                                        >
                                            {category.category}
                                        </MenuItem>
                                    ))}
                                </Select>

                                <TextField
                                    required
                                    id="item"
                                    name="item"
                                    label="Item"
                                    type="search"
                                    variant="standard"
                                    value={item}
                                    className={classes.inputField}
                                    onChange={handleItemValidation}
                                />
                                {itemError && <p id="itemInvalid" className={classes.errormessage}>{itemError}</p>}

                                <TextField
                                    required
                                    id="number"
                                    name="rate"
                                    label="Rate"
                                    type="search"
                                    variant="standard"
                                    value={cost}
                                    className={classes.inputField}
                                    onChange={handleCostChange}
                                />
                                {costError && <p id="itemInvalid" className={classes.errormessage}>{costError}</p>}
                                <div className={classes.dialogBottom}>

                                    <Button
                                        id="saveButton"
                                        variant="contained"
                                        color="primary"
                                        className={classes.dialogButton}
                                        onClick={onSaveButtonClick

                                        }

                                    >Save
                                    </Button>

                                    {successMessage()}

                                </div>
                            </FormControl>
                        </div>
                    </div>

                </div>
                <Collapse in={alertOpen}>
                    <Alert severity="error">Fields Can't be Empty!</Alert>
                </Collapse>


            </Dialog>
        </>

    );
};

AddProductDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    allCategory: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AddProductDialog;


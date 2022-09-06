import { Button, Dialog, Typography } from "@material-ui/core";
import React from "react";
import styles from './styles/addProductDialogStyles';
import { MenuItem } from "@material-ui/core";
import { Select, Input, InputLabel, FormControl, Collapse } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import PropTypes from "prop-types";
import useEditProduct from "./hooks/useEditProduct";


const EditProductDialog = ({
    open,
    allCategory,
    editProductId,
    onClose,

}) => {
    const classes = styles();



    const { handleEditProduct, successMessage } = useEditProduct();

    const [alertOpen, setAlertOpen] = React.useState(false);
    const [category, setCategory] = React.useState();
    const [cost, setCost] = React.useState();
    const [item, setItem] = React.useState("");
    const [itemError, setItemError] = React.useState(null);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleCostChange = (event) => {
        setCost(event.target.value);
    };

    const handleClose = () => {
        setItem("");
        setCost();
        setAlertOpen(false);
        onClose();
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

    const onUpdateButtonClick = () => {

        const productDetail = {
            item: item,
            price: cost,
            category_id: category
        };
        console.log(itemError);

        if (category !== null && item !== null && cost !== null && itemError === null) {
            handleEditProduct(productDetail);
        }

        setCategory("")
        setCost();
        setItem("");
        setAlertOpen(false);
    };


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
                        Edit Product
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
                            </FormControl>

                            <Typography
                                className={classes.item}
                                variant="subtitle1"
                                color="primary"
                                data-testid="itemID"
                            >
                                Item
                            </Typography>
                            <Input
                                fullWidth
                                required
                                id="item"
                                name="item"
                                value={item}
                                className={classes.inputField}
                                onChange={handleItemValidation}
                                type="text"
                            />
                            {itemError && <p id="itemInvalid" className={classes.errormessage}>{itemError}</p>}
                            <Typography
                                className={classes.item}
                                variant="subtitle1"
                                color="primary"
                                data-testid="costID"
                            >
                                Price
                            </Typography>
                            <Input
                                fullWidth
                                required
                                id="number"
                                name="item"
                                className={classes.inputField}
                                onChange={handleCostChange}
                                type="text"

                            />
                            <div className={classes.dialogBottom}>
                                <Button
                                    id="saveButton"
                                    variant="contained"
                                    color="primary"
                                    onClick={onUpdateButtonClick}
                                    className={classes.dialogButton}
                                >Update
                                </Button>

                                {successMessage()}

                            </div>

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

EditProductDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    allCategory: PropTypes.array.isRequired,
    editProductId: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditProductDialog;


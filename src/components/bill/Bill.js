import { Button, Typography } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import styles from "./styles/billStyles"
import { MenuItem } from "@material-ui/core";
import useItems from "./hooks/useItems";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import MaterialTable from "@material-table/core";
import useAddToCartProduct from "./hooks/useAddToCartProduct"
import useCartItems from "./hooks/useCartItems";
import Delete from '@material-ui/icons/Delete';
import useDeleteCartItem from "./hooks/useDeleteCartItem";
import billService from "./services/billService";
import cartService from "./services/cartService";
import { FormLabel, RadioGroup, FormControlLabel, Radio, FormControl } from "@material-ui/core";


const Bill = () => {
    const classes = styles();

    const { allItem } = useItems();
    const { cartItems } = useCartItems();
    const { handleAddToCartProduct } = useAddToCartProduct();
    const { deleteCartItem } = useDeleteCartItem();

    const [billRequest, setBillRequest] = useState(false);
    useEffect(() => {
        if (billRequest) {
            billService.fetchTotalPrice().then((totalPrice) => {
                setTotalPrice(totalPrice);

            });
        }
    }, [billRequest]);



    const [resetRequest, setResetRequest] = useState(false);
    useEffect(() => {
        if (resetRequest) {
            cartService.resetCart().then((response) => {
                window.location.reload(true);
            });
        }

    }, [resetRequest]);



    const columns = [
        {
            title: 'ITEM', field: 'item'
        },
        {
            title: 'QUANTITY', field: 'quantity.magnitude'
        },
        {
            title: 'PRICE', field: 'price',
        },
        {
            title: 'UNIT', field: '', emptyValue: () => <div>Kg</div>
        }
    ];


    const user_id = 1;
    const [totalPrice, setTotalPrice] = useState("Not Calculated");


    const [item, setItem] = useState("");
    const handleItem = (event) => {
        setItem(event.target.value);
    };

    const [magnitude, setMagnitude] = useState();
    const [quantityError, setQuantityError] = useState(null);

    const quantityValid = /^[1-9]\d{0,7}(?:\.\d{1,2})?$/;

    const handleQuantity = (event) => {
        if (!quantityValid.test(event.target.value)) {
            setQuantityError('Quantity is invalid');
        } else {
            setQuantityError(null);

        }
        setMagnitude(event.target.value);
    };

    const [unit, setUnit] = useState("");
    const handleUnit = (event) => {
        setUnit(event.target.value);
    }

    const onAddButtonClick = () => {

        const productDetail = {
            product_id: item,
            magnitude: magnitude,
            user_id: user_id,
            unit: unit,
        };

        if (item !== null && magnitude !== null && unit != null) {
            handleAddToCartProduct(productDetail);
        }

        setItem("");
        setMagnitude();
        setUnit("");
    }


    return (
        <>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className={classes.billContainer}>

                    <TextField
                        id="outlined-select-currency"
                        required
                        select
                        label="Select Item"
                        variant="standard"
                        onChange={handleItem}
                        value={item}
                        data-testid="dropDownId"
                        className={classes.itemDropDown}

                    >
                        {allItem.map((allItem, index) => (

                            <MenuItem
                                key={index}
                                value={allItem.id}
                                id="categoryInList"
                            >
                                {allItem.item}
                            </MenuItem>
                        ))}
                    </TextField>
                    <div>
                        <TextField
                            id="standard-search"
                            required
                            label="Enter Quantity"
                            type="search"
                            className={classes.quantity}
                            variant="standard"
                            onChange={handleQuantity}
                            value={magnitude}
                        />
                        {quantityError && <p id="itemInvalid" className={classes.errormessage}>{quantityError}</p>}</div>
                    <FormControl className={classes.radioButton}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Unit</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={unit}
                            onChange={handleUnit}
                        >
                            <FormControlLabel value="kg" control={<Radio size="small" color="primary" />} label="Kg" />
                            <FormControlLabel value="gm" control={<Radio size="small" color="primary" />} label="Gm" />
                        </RadioGroup>
                    </FormControl>

                    <Button variant="contained"
                        color="primary" className={classes.cartButton}
                        onClick={onAddButtonClick}
                    >
                        Add to Cart
                    </Button>
                </div>
            </Box>

            <div className={classes.tableStyle} id="tableId">

                <MaterialTable

                    data={cartItems}
                    columns={columns}
                    options={{

                        search: false,
                        paging: false,
                        actionsColumnIndex: -1,

                        showTitle: false,
                        toolbar: false,
                        headerStyle: {
                            position: "sticky",
                            top: "0",
                            fontWeight: "bold", fontSize: "18px"
                        },
                        maxBodyHeight: 400,
                        minBodyHeight: 400,


                    }}
                    actions={[
                        {
                            icon: Delete,
                            tooltip: 'Delete Product',
                            onClick: (event, rowData) => {
                                deleteCartItem(rowData.id);
                            }
                        },

                    ]}

                /></div>

            <div className={classes.billSection}>
                <Typography variant="h6" >Total Price : {totalPrice}</Typography>

                <Button className={classes.billButton}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setBillRequest(true);
                    }}

                >Generate Bill</Button>
                <Button className={classes.resetButton}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setResetRequest(true);
                    }}

                >Reset</Button>

            </div>

        </>
    )
}

export default Bill;

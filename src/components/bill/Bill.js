import { Button, Typography } from "@material-ui/core";
import { React, useState } from "react";
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


const Bill = () => {
    const classes = styles();

    const { allItem } = useItems();
    const { cartItems } = useCartItems();
    const { handleAddToCartProduct } = useAddToCartProduct();
    const { deleteCartItem } = useDeleteCartItem();


    const columns = [
        {
            title: 'ITEM', field: 'item'
        },
        {
            title: 'QUANTITY', field: 'quantity'
        },
        {
            title: 'PRICE', field: 'price', 
        },
    ];


    const user_id = 1;
    const [totalPrice, setTotalPrice] = useState("Not Calculated");


    const [item, setItem] = useState("");
    const handleItem = (event) => {
        setItem(event.target.value);
    };

    const [quantity, setQuantity] = useState();
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    }


    const onAddButtonClick = () => {

        const productDetail = {
            product_id: item,
            quantity: quantity,
            user_id: user_id
        };

        if (item !== null && quantity !== null) {
            handleAddToCartProduct(productDetail);
        }

        setItem("");
        setQuantity();
    }


    const onResetButtonClick = () => {
    }

    const onBillButtonClick = () =>{

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
                    <TextField
                        id="standard-search"
                        required
                        label="Enter Quantity"
                        type="search"
                        className={classes.quantity}
                        variant="standard"
                        onChange={handleQuantity}
                        value={quantity}
                    />

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
                    title=""
                    data={cartItems}
                    columns={columns}
                    options={{
                        search: false,
                        actionsColumnIndex: -1,
                        headerStyle: { fontWeight: "bold", fontSize: "18px" },

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
                    onClick={onBillButtonClick}

                >Generate Bill</Button>
                <Button className={classes.resetButton}
                    variant="contained"
                    color="primary"
                    onClick={onResetButtonClick}

                >Reset</Button>

            </div>

        </>
    )
}

export default Bill;
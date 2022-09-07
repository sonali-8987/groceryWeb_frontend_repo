import { Button } from "@material-ui/core";
import { React, useState } from "react";
import styles from "./styles/billStyles"
import { MenuItem } from "@material-ui/core";
import useItems from "./hooks/useItems";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import MaterialTable from "@material-table/core";

const Bill = () => {
    const classes = styles();

    const columns = [
        {
            title: 'ITEM', field: 'item'
        },
        {
            title: 'QUANTITY', field: 'quantity'
        },
        {
            title: 'PRICE', field: 'price'
        },
    ];

    const { allItem } = useItems();

    const [item, setItem] = useState()

    const handleChange = (event) => {
        setItem(event.target.value);
    };


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
                    select
                    label="Select Item"
                    variant="standard"

                    value={item}
                    onChange={handleChange}
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
                    label="Enter Quantity"
                    type="search"
                    className={classes.quantity}
                    variant="standard"
                />

                <Button variant="contained"
                    color="primary" className={classes.cartButton}>
                    Add to Cart
                </Button>

            </div>
        </Box>

<div className={classes.tableStyle} id="tableId">

<MaterialTable
    title=""
   
    columns={columns}
    options={{
        search: false,
        actionsColumnIndex: -1,
        headerStyle: { fontWeight: "bold", fontSize: "18px" },

    }}
    
/></div>
</>
    )
}

export default Bill;
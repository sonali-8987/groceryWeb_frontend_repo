import { Typography, Button } from "@material-ui/core";
import styles from "./styles/priceListStyles";
import { React, useEffect, useState } from "react";
import AddProductDialog from "./AddProductDialog";
import useCategory from "./hooks/useCategory";
import useProducts from "./hooks/useProducts";
import useDeleteProduct from "./hooks/useDeleteProduct";
import EditProductDialog from "./EditProductDialog";
import MaterialTable from "@material-table/core";
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit'
import useAddProduct from "./hooks/useAddProduct";

const PriceList = (

) => {

    const classes = styles();

    const { products} = useProducts();
    const { categories } = useCategory();
    const { deleteProduct } = useDeleteProduct();

    const { save, setSave } = useAddProduct();
    
   
    const columns = [

        {
            title: 'CATEGORY', field: 'category.category'
        },
        {
            title: 'ITEM', field: 'item'
        },
        {
            title: 'RATE( /KG )', field: 'price'
        },
    ];


    const [addProductDialogPopUp, setAddProductDialogPopUp] = useState(false);
    const [editProductDialogPopUp, setEditProductDialogPopUp] = useState(false);
    const [editProductId, setEditProductId] = useState(0);


    return (

        <>
            <div className={classes.priceListContainer}>
                <Button
                    id="addProductButton"
                    className={classes.addProductButton}
                    variant="contained"
                    color="primary"
                    onClick={() => {

                        setSave(false);
                        setAddProductDialogPopUp(true);

                    }}

                >
                    <Typography className={classes.addProductText}>
                        Add Product
                    </Typography>
                </Button>
            </div>

            <div className={classes.tableStyle} id="tableId">

                <MaterialTable

                    data={products}
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

                    }}
                    actions={[
                        {
                            icon: Edit,
                            tooltip: 'Edit Product',
                            onClick: (event, rowData) => {

                                setEditProductDialogPopUp(true);
                                setEditProductId(rowData.id);
                            },

                        },
                        {
                            icon: Delete,
                            tooltip: 'Delete Product',
                            onClick: (event, rowData) => {
                                deleteProduct(rowData.id);
                            },
                        },
                    ]}
                /></div>

            <AddProductDialog

                open={addProductDialogPopUp}
                allCategory={categories}
                onClose={() => setAddProductDialogPopUp(false)}

            />
            <EditProductDialog
                open={editProductDialogPopUp}
                allCategory={categories}
                editProductId={editProductId}
                onClose={() => setEditProductDialogPopUp(false)}
            />
        </>
    )

};
export default PriceList;


import { Typography, Button } from "@material-ui/core";
import styles from "./styles/priceListStyles";
import { React, useState } from "react";
import AddProductDialog from "./AddProductDialog";
import useCategory from "./hooks/useCategory";
import useProducts from "./hooks/useProducts";
import useDeleteProduct from "./hooks/useDeleteProduct";
import EditProductDialog from "./EditProductDialog";
import MaterialTable from "@material-table/core";
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit'



const PriceList = (

) => {


    const classes = styles();


    const { products } = useProducts();


    const columns = [

        {
            title: 'CATEGORY', field: 'category.category'
        },
        {
            title: 'ITEM', field: 'item'
        },
        {
            title: 'PRICE', field: 'price'
        },
    ];


    const { categories } = useCategory();

    const { deleteProduct } = useDeleteProduct();
    // const { products} = useProducts();

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
                    title=""
                    data={products}
                    columns={columns}
                    options={{
                        search: false,
                        actionsColumnIndex: -1,
                        headerStyle: { fontWeight: "bold", fontSize: "18px" },

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
                            }
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


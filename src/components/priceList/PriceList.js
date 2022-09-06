import { Typography, Button } from "@material-ui/core";
import styles from "./styles/priceListStyles";
import { React, useEffect, useState } from "react";
import AddProductDialog from "./AddProductDialog";
import useCategory from "./hooks/useCategory";
import useProducts from "./hooks/useProducts";
import useDeleteProduct from "./hooks/useDeleteProduct";
import EditProductDialog from "./EditProductDialog";
import { TablePagination, TableCell, TableContainer, TableBody, Table, Paper, TableHead, TableRow } from "@material-ui/core";



const columns = [
    { id: 'category', label: 'CATEGORY', width: 170 },
    { id: 'item', label: 'ITEM', width: 100 },

    { id: 'price', label: 'PRICE', width: 100 },

];


const PriceList = ({

}) => {
    const classes = styles();

    const { categories } = useCategory();

    const { deleteProduct, successMessage } = useDeleteProduct();


    const { products } = useProducts();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        console.log(newPage);
        setPage(newPage);

    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const [addProductDialogPopUp, setAddProductDialogPopUp] = useState(false);
    const [editProductDialogPopUp, setEditProductDialogPopUp] = useState(false);
    const [editProductId, setEditProductId] = useState();

    return (

        <>

            <div className={classes.priceListContainer}>

                <Button
                    id="addProductButton"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setAddProductDialogPopUp(true);


                    }}
                    className={classes.addProductButton}
                >
                    <Typography className={classes.addProductText}>
                        ADD PRODUCT
                    </Typography>
                </Button>
            </div>



            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}

                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={product.id}>
                                            {columns.map((column) => {
                                                let value;
                                                if (column.id === "category") {
                                                    value = product[column.id].category;
                                                }
                                                else {
                                                    value = product[column.id];
                                                }
                                                return (
                                                    <>
                                                        <TableCell key={column.id} align={column.align}>

                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}

                                                        </TableCell>
                                                    </>

                                                );
                                            })}

                                            <Button className={classes.editButton}
                                                color="primary"
                                                variant="contained"
                                                onClick={() => {
                                                    setEditProductDialogPopUp(true);
                                                    setEditProductId(product.id);

                                                }}
                                            >Edit</Button>

                                            <Button className={classes.deleteButton}
                                                color="primary"
                                                variant="contained"
                                                onClick={() => {
                                                    deleteProduct(product.id);
                                                    { successMessage() }

                                                }}
                                            >Delete</Button>


                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>


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


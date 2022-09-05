import { Typography, Button } from "@material-ui/core";
import styles from "./styles/priceListStyles";
import { React, useEffect, useState } from "react";
import AddProductDialog from "./AddProductDialog";
import useCategory from "./hooks/useCategory";
import useProducts from "./hooks/useProducts";
import useDeleteProduct from "./hooks/useDeleteProduct";

import { TablePagination, TableCell, TableContainer, TableBody, Table, Paper, TableHead, TableRow } from "@material-ui/core";


const columns = [
    { id: 'category', label: 'CATEGORY', minWidth: 170 },
    { id: 'item', label: 'ITEM', minWidth: 100 },

    { id: 'price', label: 'PRICE', minWidth: 100 },

];


const PriceList = ({

}) => {
    const classes = styles();

    const { categories } = useCategory();

    const { deleteProduct, successMessage } = useDeleteProduct();


    const emptyCategory = [
        {
            id: "",
            category: ""
        },
    ];

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
    const [allCategory, setAllCategory] = useState(emptyCategory);


    return (

        <>
            <div className={classes.priceListContainer}>

                <Button
                    id="addProductButton"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setAddProductDialogPopUp(true);
                        setAllCategory(categories);


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

                                            <Button
                                                onClick={() => {

                                                }}
                                            >Edit</Button>
                                            <Button className={classes.deleteButton}
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
                allCategory={allCategory}
                onClose={() => setAddProductDialogPopUp(false)}


            />

        </>

    )

};
export default PriceList;



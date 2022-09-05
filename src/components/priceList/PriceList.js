import { Typography, Button } from "@material-ui/core";
import styles from "./styles/priceListStyles";
import { React, useState } from "react";
import AddProductDialog from "./AddProductDialog";
import useCategory from "./hooks/useCategory";



const PriceList = () => {
    const classes = styles();

    const { categories } = useCategory();
 
    const emptyCategory = [
        {
          id : "",
          category:""
        },
      ];


    const [addProductDialogPopUp, setAddProductDialogPopUp] = useState(false);
    const [allCategory, setAllCategory] = useState(emptyCategory);

    return (

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

            <AddProductDialog

                open={addProductDialogPopUp}
                allCategory={allCategory}
                onClose={() => setAddProductDialogPopUp(false)}
                
            
            />
        </div>

    )

};
export default PriceList;



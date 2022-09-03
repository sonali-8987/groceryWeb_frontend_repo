import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import PriceList from "../priceList/PriceList";
import Bill from "../bill/Bill";
import Error from "../error/Error";
import Home from "../home/Home";


const RootRouter = () => {

    return (
        <div>
            <Routes>

                <Route exact path="/priceList" element={<PriceList />}></Route>
                <Route exact path="/bill" element={<Bill />}></Route>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="*" element={<Error />}></Route>

            </Routes>
        </div>
    );
};


export default RootRouter;

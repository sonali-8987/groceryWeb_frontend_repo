import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import PriceList from "../priceList/PriceList";
import Bill from "../bill/Bill";

const RootRouter = () => {

    return (
        <Router>
            <Routes>

                <Route path="/priceList" element={<PriceList />}></Route>
                <Route path="/bill" element={<Bill />}></Route>
            </Routes>
        </Router>
    );
};

export default RootRouter;

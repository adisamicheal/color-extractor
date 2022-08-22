import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

const AllRoutes = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </React.Fragment>
    )
}

export default AllRoutes;
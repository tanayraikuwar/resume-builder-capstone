import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Form from "../components/multistepForm/Form";
import PreviewTemplate from "../pages/PreviewTemplate";

let AllRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home dispatch={props.dispatch} />} />
            <Route path="/about_us" element={<About />} />

            <Route path="/myresume/changePersonalDetails" element={<Form />} />
            <Route path="/myresume/changePersonalDetails/preview" element={<PreviewTemplate setModalVisible={props.setModalVisible} />} />
        </Routes>
    )
}

export default AllRoutes;
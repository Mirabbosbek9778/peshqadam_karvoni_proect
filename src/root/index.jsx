import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"
import HomePage from "../pages/HomePage"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LoyihaDescPage from "../pages/LoyihaDescPage"
import YonalishComponents from "../components/yonalishComponents"

const Root = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/loyiha'} element={<LoyihaDescPage />} />
                <Route path={'/loyiha/:id'} element={<YonalishComponents />} />
                <Route path={'/'} element={<Navigate to={'/home'} />} />
                <Route path="*" element={<h1>404 Error</h1>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default Root
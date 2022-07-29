import React from "react";
import Header from '../../components/Header'
import {Outlet} from 'react-router-dom'
import Footer from "../../pages/Home/Footer";


const UserLayout = (props: any) => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default UserLayout
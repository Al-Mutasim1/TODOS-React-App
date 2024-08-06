import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


export default function Layout() {
    return <>
         <Navbar/>
        <Outlet>
       
        </Outlet>
        <Footer />

    </>}

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <div className="hidden sm:block">
            <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
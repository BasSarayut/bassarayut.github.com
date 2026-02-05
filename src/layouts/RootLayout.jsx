import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import WIPBadge from '../components/WIPBadge';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <WIPBadge />
            <BackToTop />
        </>
    );
};

export default RootLayout;

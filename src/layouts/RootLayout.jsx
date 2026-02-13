import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import BackToTop from '../components/BackToTop';
import WIPBadge from '../components/WIPBadge';
import { Toaster } from 'sonner';

const RootLayout = () => {
    const location = useLocation();

    return (
        <>
            <AnimatedBackground />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            <WIPBadge />
            <BackToTop />
            <Toaster richColors position="top-center" />
        </>
    );
};

export default RootLayout;

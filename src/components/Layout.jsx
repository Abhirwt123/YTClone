import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import VideosContainer from './VideoContainer/VideosContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Watch from './Watch/Watch';
import Text from './text';

const MainContent = ({ children }) => (
    <div className=''>
        <Header />
        <div className='flex'>
            <Sidebar />
            <Text/>
            {children}
        </div>
    </div>
);

const Layout = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainContent><VideosContainer /></MainContent>} />
                <Route path='/watch' element={<MainContent><Watch /></MainContent>} />
            </Routes>
        </Router>
    );
};

export default Layout;

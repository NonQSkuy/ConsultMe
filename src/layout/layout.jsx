import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar'; // Adjust the path to your Navbar component
import Footer from './footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
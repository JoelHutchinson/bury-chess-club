import React from 'react';

import { Outlet } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className={"page"}>
      <div className={"inner-page"}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
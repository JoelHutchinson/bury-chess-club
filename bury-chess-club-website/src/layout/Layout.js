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
          <div className={"panel"} id={"main-panel"}>
            <Outlet />
          </div>
          <div className={"panel"} id={"events-panel"}>
            <h1>Events</h1>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
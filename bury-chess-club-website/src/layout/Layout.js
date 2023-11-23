import React from 'react';

import { Outlet } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

import FacebookTimeline from '../components/FacebookTimeline';

const Layout = (props) => {
  return (
    <div className={"page"}>
      <div className={"inner-page"}>
        <Header />
        <main>
          <div className={"panel"} id={"main-panel"}>
            <Outlet />
          </div>
          <div className={"panel"} id={"facebook-panel"}>
            <FacebookTimeline />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
import React from "react";

import SideDrawer from "./SideDrawer";
import Header from "./Header";
import Footer from "./Footer";
import Page from "./Page";

const Layout = () => {
  return (
    <div className="flex h-screen relative overflow-hidden">
      <SideDrawer />
      <div className="w-full mb-8">
        <Header />
        <Page />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;

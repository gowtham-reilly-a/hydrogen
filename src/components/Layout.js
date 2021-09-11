import React, { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

import SideDrawer from "./SideDrawer";
import Header from "./Header";
import Footer from "./Footer";
import Page from "./Page";

const Layout = () => {
  const { theme } = useContext(NavigationContext);

  return (
    <div
      className={`${
        theme === "dark" && "theme-dark"
      } flex h-screen relative overflow-hidden select-none`}
    >
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

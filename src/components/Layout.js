import React from "react";

import SideDrawer from "./SideDrawer";
import Header from "./Header";
import Footer from "./Footer";
import Page from "./Page";
import { connect } from "react-redux";

const Layout = ({ theme }) => {
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

const mapStateToProps = (state) => {
  return {
    theme: state.preferences.theme,
  };
};

export default connect(mapStateToProps)(Layout);

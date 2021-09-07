import React, { useState } from "react";

const Context = React.createContext();

export const Provider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const [sideDrawerVisiblity, setSideDrawerVisiblity] = useState(false);
  const [topbarNavigation, setTopbarNavigation] = useState(false);
  const [topbarTitle, setTopbarTitle] = useState(null);
  const [tabNavigationVisiblity, setTabNavigationVisiblity] = useState(true);

  return (
    <Context.Provider
      value={{
        currentPage,
        setCurrentPage,
        sideDrawerVisiblity,
        setSideDrawerVisiblity,
        topbarNavigation,
        setTopbarNavigation,
        topbarTitle,
        setTopbarTitle,
        tabNavigationVisiblity,
        setTabNavigationVisiblity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

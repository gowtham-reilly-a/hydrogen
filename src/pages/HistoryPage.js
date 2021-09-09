import React, { useEffect, useContext } from "react";

import NavigationContext from "../context/NavigationContext";
import MainWrapper from "../components/MainWrapper";
import SearchForm from "../components/SearchForm";

export default function HistoryPage({ location }) {
  const { setCurrentPage } = useContext(NavigationContext);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location, setCurrentPage]);

  return (
    <MainWrapper>
      <SearchForm placeholder="Search order number" />
    </MainWrapper>
  );
}

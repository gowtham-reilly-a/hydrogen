import React, { useEffect, useContext } from "react";

import NavigationContext from "../context/NavigationContext";

import SearchForm from "../components/SearchForm";

export default function HistoryPage({ location }) {
  const { setCurrentPage } = useContext(NavigationContext);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location, setCurrentPage]);

  return (
    <main className="h-screen">
      <SearchForm placeholder="Search order number" />
    </main>
  );
}

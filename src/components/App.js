import React from "react";

import { Router, Route } from "react-router-dom";
import history from "../history";

import { Provider as NavigationProvider } from "../context/NavigationContext";

import Header from "./headers/Header";
import Footer from "./Footer";
import SalesPage from "../pages/SalesPage";
import HistoryPage from "../pages/HistoryPage";
import ProductsPage from "../pages/ProductsPage";
import SideDrawer from "./SideDrawer";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductUpdatePage from "../pages/ProductUpdatePage";

export default function App() {
  return (
    <Router history={history}>
      <NavigationProvider>
        <div className="flex flex-col gap-4 h-full max-w-sm mx-auto relative">
          <Header />
          <Route path="/" component={SalesPage} exact />
          <Route path="/history" component={HistoryPage} exact />
          <Route path="/products" component={ProductsPage} exact />
          <Route path="/products/create" component={ProductCreatePage} />
          <Route path="/products/show/:id" component={ProductDetailPage} />
          <Route path="/products/edit/:id" component={ProductUpdatePage} />
          <SideDrawer />
          <Footer />
        </div>
      </NavigationProvider>
    </Router>
  );
}

import React from "react";
import { Route } from "react-router";

import SalesPage from "../pages/SalesPage";
import HistoryPage from "../pages/HistoryPage";
import ProductsPage from "../pages/ProductsPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductUpdatePage from "../pages/ProductUpdatePage";
import CheckoutPage from "../pages/CheckoutPage";
import ReceiptPage from "../pages/ReceiptPage";

const Page = () => {
  return (
    <React.Fragment>
      <Route path="/" component={SalesPage} exact />
      <Route path="/history" component={HistoryPage} exact />
      <Route path="/products" component={ProductsPage} exact />
      <Route path="/products/create" component={ProductCreatePage} />
      <Route path="/products/show/:id" component={ProductDetailPage} />
      <Route path="/products/edit/:id" component={ProductUpdatePage} />
      <Route path="/checkout" component={CheckoutPage} exact />
      <Route path="/receipt/:orderNumber" component={ReceiptPage} />
    </React.Fragment>
  );
};

export default Page;

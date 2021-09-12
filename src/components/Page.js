import React from "react";
import { Route, Switch } from "react-router";

import SalesPage from "../pages/SalesPage";
import OrdersPage from "../pages/OrdersPage";
import ProductsPage from "../pages/ProductsPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductUpdatePage from "../pages/ProductUpdatePage";
import CheckoutPage from "../pages/CheckoutPage";
import ReceiptPage from "../pages/ReceiptPage";
import OrderDetailPage from "../pages/OrderDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={SalesPage} exact />
        <Route path="/orders" component={OrdersPage} exact />
        <Route path="/orders/:orderId" component={OrderDetailPage} />
        <Route path="/products" component={ProductsPage} exact />
        <Route path="/products/create" component={ProductCreatePage} />
        <Route path="/products/show/:id" component={ProductDetailPage} />
        <Route path="/products/edit/:id" component={ProductUpdatePage} />
        <Route path="/checkout" component={CheckoutPage} exact />
        <Route path="/receipt/:orderNumber" component={ReceiptPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
};

export default Page;

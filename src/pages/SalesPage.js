import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";

import MainWrapper from "../components/MainWrapper";
import NavigationContext from "../context/NavigationContext";
import LiveSearch from "../components/LiveSearch";
import Cart from "../components/Cart";

function SalesPage({ location, products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { setCurrentPage } = useContext(NavigationContext);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location, setCurrentPage]);

  const onClickHandler = (productId) => {
    setSelectedProduct(products.find((product) => product.id === productId));
  };

  return (
    <MainWrapper>
      <LiveSearch
        title="Search products"
        placeholder="Eg: name or barcode"
        onClickHandler={onClickHandler}
        data={products}
      />
      <Cart selectedProduct={selectedProduct} />
    </MainWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  };
};

export default connect(mapStateToProps)(SalesPage);

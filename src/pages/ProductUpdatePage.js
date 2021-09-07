import React from "react";
import { connect } from "react-redux";
import { updateProduct } from "../actions";
import useTopbarNavigation from "../hooks/useTopbarNavigation";

import ProductForm from "../components/ProductForm";

const ProductUpdatePage = ({ product, updateProduct, history }) => {
  useTopbarNavigation();

  const onSubmit = (values) => {
    console.log(values);
    updateProduct({
      updatedOn: new Date().toISOString(),
      ...values,
    });

    history.goBack();
  };

  return (
    <main>
      <ProductForm product={product} onSubmit={onSubmit} title="Update" />
    </main>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { updateProduct })(ProductUpdatePage);

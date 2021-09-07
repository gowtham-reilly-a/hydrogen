import React from "react";

import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import ProductForm from "../components/ProductForm";
import { createProduct } from "../actions";
import useTopbarNavigation from "../hooks/useTopbarNavigation";

const ProductCreatePage = ({ createProduct }) => {
  useTopbarNavigation();

  const onSubmit = (values) => {
    createProduct({
      id: uuidv4(),
      createdOn: new Date().toISOString(),
      ...values,
    });
  };

  return (
    <main className="px-3">
      <ProductForm onSubmit={onSubmit} title="Create" />
    </main>
  );
};

export default connect(null, { createProduct })(ProductCreatePage);

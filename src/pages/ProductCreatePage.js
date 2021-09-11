import React from "react";

import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ProductForm from "../components/ProductForm";
import { createProduct } from "../actions";
import MainWrapper from "../components/MainWrapper";
import { IoArrowBackOutline } from "react-icons/io5";
import NavigationContext from "../context/NavigationContext";

class ProductCreatePage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setHeaderOptions({
      title: "Create new product",
      menu: [
        <IoArrowBackOutline
          size="1.5rem"
          title="Go back"
          onClick={() => {
            this.props.history.goBack();
          }}
          className="cursor-pointer"
        />,
      ],
    });
  }

  onSubmit = (values) => {
    this.props.createProduct({
      id: uuidv4(),
      createdOn: new Date().toISOString(),
      ...values,
    });
  };

  render() {
    return (
      <MainWrapper>
        <div className="h-full flex flex-col justify-evenly gap-2 p-2 bg-skin-highlight bg-opacity-20 blur-xl rounded-lg max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-skin-base px-4">
            Create new product
          </h1>
          <div className="overflow-auto max-h-96 px-4">
            <ProductForm onSubmit={this.onSubmit} title="Create" />
          </div>
        </div>
      </MainWrapper>
    );
  }
}

export default connect(null, { createProduct })(ProductCreatePage);

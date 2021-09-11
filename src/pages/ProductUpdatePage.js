import React from "react";
import { connect } from "react-redux";
import { updateProduct } from "../actions";
import ProductForm from "../components/ProductForm";
import MainWrapper from "../components/MainWrapper";
import { IoArrowBackOutline } from "react-icons/io5";
import NavigationContext from "../context/NavigationContext";

class ProductUpdatePage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setHeaderOptions({
      title: "Edit product",
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
    this.props.updateProduct({
      updatedOn: new Date().toISOString(),
      ...values,
    });

    this.props.history.goBack();
  };

  render() {
    return (
      <MainWrapper>
        <div className="h-full flex flex-col justify-evenly gap-2 p-2 bg-skin-highlight bg-opacity-20 blur-xl rounded-lg max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-skin-base px-4">
            Edit product
          </h1>
          <div className="overflow-auto max-h-96 px-4">
            <ProductForm
              product={this.props.product}
              onSubmit={this.onSubmit}
              title="Update"
            />
          </div>
        </div>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { updateProduct })(ProductUpdatePage);

import React from "react";
import { connect } from "react-redux";
import { updateProduct, deleteProduct, removeFromCart } from "../actions";
import NavigationContext from "../context/NavigationContext";
import { IoArrowBackOutline, IoTrashOutline } from "react-icons/io5";
import { VscEdit } from "react-icons/vsc";
import MainWrapper from "../components/MainWrapper";

class ProductDetailPage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setHeaderOptions({
      title: this.props.product && `${this.props.product.name}`,
      menu: this.props.product && [
        <IoArrowBackOutline
          size="1.5rem"
          title="Go back"
          onClick={() => {
            this.props.history.goBack();
          }}
          className="cursor-pointer"
        />,
        <VscEdit
          size="1.5rem"
          title="Edit product"
          onClick={() => {
            this.props.history.push(`/products/edit/${this.props.product.id}`);
          }}
          className="cursor-pointer"
        />,
        <IoTrashOutline
          size="1.5rem"
          title="Delete product"
          onClick={() => {
            this.props.deleteProduct(this.props.product.id);
            this.props.removeFromCart(this.props.product.id);
            this.props.history.push(`/products`);
          }}
          className="cursor-pointer text-skin-negative"
        />,
      ],
    });
  }

  makeListItem = (label, value) => {
    return (
      <li className="flex justify-between border text-skin-base border-skin-accent bg-skin-accent bg-opacity-50 blur-xl p-2">
        <span className="font-bold">{label}:</span>
        <span>{value}</span>
      </li>
    );
  };

  render() {
    const product = this.props.product;

    if (!product) return this.props.history.push(`/404`);

    return (
      <MainWrapper>
        <ul className="h-full flex flex-col justify-center gap-2 py-3 px-6 text-skin-base bg-skin-highlight bg-opacity-20 blur-xl rounded-lg max-w-lg mx-auto">
          {product.createdOn &&
            this.makeListItem(
              "Created on",
              new Date(product.createdOn).toLocaleString()
            )}
          {product.updatedOn &&
            this.makeListItem(
              "Updated on",
              new Date(product.updatedOn).toLocaleString()
            )}
          {product.name && this.makeListItem("Name", product.name)}
          {product.price && this.makeListItem("Amount", product.price)}
          {product.brand && this.makeListItem("Brand", product.brand)}
          {product.supplier && this.makeListItem("Supplier", product.supplier)}
          {product.stock && this.makeListItem("Stock", product.stock)}
          {product.sku && this.makeListItem("SKU", product.sku)}
          {product.barcode && this.makeListItem("Barcode", product.barcode)}
        </ul>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  updateProduct,
  deleteProduct,
  removeFromCart,
})(ProductDetailPage);

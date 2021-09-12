import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import MainWrapper from "../components/MainWrapper";
import LiveSearch from "../components/LiveSearch";
import Cart from "../components/Cart";
import NavigationContext from "../context/NavigationContext";
import { IoSearchOutline } from "react-icons/io5";

class SalesPage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setCurrentPage(this.props.location.pathname);
    this.context.setHeaderOptions({
      title: "Products bag",
      menu: [
        <IoSearchOutline
          size="1.5rem"
          title="Search products"
          onClick={() => {
            this.context.setIsModalVisible(true);
            this.context.setModalType("search");
          }}
          className="cursor-pointer"
        />,
      ],
    });
  }

  onClickHandler = (productId) => {
    const selectedProduct = this.props.products.find(
      (product) => product.id === productId
    );

    if (!selectedProduct) return null;

    this.props.addToCart({ ...selectedProduct, quantity: 1 });
  };

  render() {
    return (
      <MainWrapper>
        <LiveSearch
          title="Search products"
          placeholder="Eg: macbook"
          onClickHandler={this.onClickHandler}
          data={this.props.products}
          result="name"
        />
        <Cart />
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  };
};

export default connect(mapStateToProps, { addToCart })(SalesPage);

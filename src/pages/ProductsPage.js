import React from "react";
import { connect } from "react-redux";
import { IoCreateOutline, IoSearchOutline } from "react-icons/io5";
import { FcInfo } from "react-icons/fc";
import { Link } from "react-router-dom";
import NavigationContext from "../context/NavigationContext";
import MainWrapper from "../components/MainWrapper";
import LiveSearch from "../components/LiveSearch";

class ProductsPage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setCurrentPage(this.props.location.pathname);
    this.context.setHeaderOptions({
      title: "Products",
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
        <IoCreateOutline
          size="1.5rem"
          title="Create product"
          className="cursor-pointer"
          onClick={() => this.props.history.push("/products/create")}
        />,
      ],
    });
  }

  onClickHandler = (productId) => {
    this.props.history.push(`/products/show/${productId}`);
  };

  render() {
    const products = this.props.products;

    if (products.length === 0)
      return (
        <div className="h-full flex justify-center items-center gap-2 bg-skin-base">
          <FcInfo size="2rem" />
          <p className="text-skin-base text-md">
            Create new products to show up here
          </p>
        </div>
      );

    return (
      <MainWrapper>
        <LiveSearch
          title="Search products"
          placeholder="Eg: macbook"
          onClickHandler={this.onClickHandler}
          data={this.props.products}
          result="name"
        />
        <div className="flex flex-col gap-3 px-3 max-w-2xl mx-auto">
          {products?.map((product) => (
            <Link
              to={`/products/show/${product.id}`}
              key={product.id}
              className="flex flex-col gap-2 text-skin-base bg-skin-highlight bg-opacity-20 blur-xl rounded-md p-3"
            >
              <h2 className="text-xl font-bold">{product.name}</h2>
              <div className="flex gap-4">
                {product.price && <p>Amount: {product.price}</p>}
                {product.stock && <p>Stock: {product.stock}</p>}
                {product.brand && <p>Brand: {product.brand}</p>}
                {product.supplier && <p>Supplier: {product.supplier}</p>}
              </div>
            </Link>
          ))}
        </div>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  };
};

export default connect(mapStateToProps)(ProductsPage);

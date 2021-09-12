import React from "react";

import NavigationContext from "../context/NavigationContext";
import MainWrapper from "../components/MainWrapper";
import LiveSearch from "../components/LiveSearch";
import { connect } from "react-redux";
import { FcInfo } from "react-icons/fc";
import { IoSearchOutline } from "react-icons/io5";

class OrdersPage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setCurrentPage(this.props.location.pathname);
    this.context.setHeaderOptions({
      title: "Orders",
      menu: this.props.orders.length > 0 && [
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

  onClickHandler = (orderId) => {
    this.context.setIsModalVisible(false);
    this.context.setModalType(null);
    this.props.history.push(`/orders/${orderId}`);
  };

  getDateString(date) {
    const dateString = Math.round(
      Math.abs((new Date() - new Date(date)) / (1000 * 60 * 60 * 24))
    );

    switch (dateString) {
      case 0:
        return `Today ${new Date(date).toLocaleTimeString()}`;
      case 1:
        return `Yesterday ${new Date(date).toLocaleTimeString()}`;
      default:
        return new Date(date).toLocaleDateString();
    }
  }

  render() {
    if (this.props.orders.length === 0)
      return (
        <div className="h-full flex justify-center items-center gap-2 bg-skin-base">
          <FcInfo size="2rem" />
          <p className="text-skin-base text-md">
            Your orders will appear here.
          </p>
        </div>
      );

    return (
      <MainWrapper>
        <LiveSearch
          title="Search orders"
          placeholder="Use order number"
          data={this.props.orders}
          onClickHandler={this.onClickHandler}
          result="orderNumber"
        />
        <ul className="flex flex-col gap-3 max-w-lg mx-auto overflow-auto">
          {this.props.orders.map((order) => {
            return (
              <li key={order.id}>
                <button
                  type="button"
                  className="flex flex-col gap-2 w-full text-skin-base bg-skin-highlight bg-opacity-20 blur-xl p-3 rounded-lg"
                  onClick={() => this.onClickHandler(order.id)}
                >
                  <h2>Order number: {order.orderNumber}</h2>
                  <div className="flex justify-between w-full">
                    <p className="text-xl font-semibold">
                      &#8377; {order.total}
                    </p>
                    <p>{this.getDateString(order.createdOn)}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(OrdersPage);

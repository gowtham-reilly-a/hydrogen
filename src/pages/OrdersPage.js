import React from "react";

import NavigationContext from "../context/NavigationContext";
import MainWrapper from "../components/MainWrapper";
import LiveSearch from "../components/LiveSearch";
import { connect } from "react-redux";
import { FcInfo } from "react-icons/fc";
import MenuSearch from "../components/MenuSearch";

class OrdersPage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setCurrentPage(this.props.location.pathname);
    this.context.setHeaderOptions({
      title: "Orders",
      menu: [<MenuSearch />],
    });
  }

  onClickHandler = (orderId) => {
    this.context.setIsModalVisible(false);
    this.context.setModalType(null);
    this.props.history.push(`/orders/${orderId}`);
  };

  render() {
    if (this.props.orders.length === 0)
      return (
        <div className="h-full flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-300 to-indigo-300">
          <FcInfo size="2rem" />
          <p className="text-black text-md">Your orders will appear here.</p>
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
        <ul className="flex flex-col gap-3 max-w-lg mx-auto">
          {this.props.orders.map((order) => {
            return (
              <li key={order.id}>
                <button
                  type="button"
                  className="flex flex-col gap-2 w-full bg-white bg-opacity-40 blur-xl text-black p-3 rounded-lg"
                  onClick={() => this.onClickHandler(order.id)}
                >
                  <h2>Order number: {order.orderNumber}</h2>
                  <p>Total amount: {order.total}</p>
                  <p>
                    Completed on: {new Date(order.createdOn).toLocaleString()}
                  </p>
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

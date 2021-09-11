import React from "react";
import { IoArrowBackOutline, IoReceiptOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MainWrapper from "../components/MainWrapper";
import NavigationContext from "../context/NavigationContext";

class OrderDetailPage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setHeaderOptions({
      title:
        this.props.order && `Order number: ${this.props.order.orderNumber}`,
      menu: this.props.order && [
        <IoArrowBackOutline
          size="1.5rem"
          title="Go back"
          onClick={() => {
            this.props.history.goBack();
          }}
          className="cursor-pointer"
        />,
        <IoReceiptOutline
          size="1.5rem"
          title="Receipt"
          onClick={() => {
            this.props.history.push(`/receipt/${this.props.order.orderNumber}`);
          }}
          className="cursor-pointer"
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
    const order = this.props.order;
    if (!order) return null;

    return (
      <MainWrapper>
        <ul className="h-full flex flex-col justify-center gap-2 py-3 px-6 text-skin-base bg-skin-highlight bg-opacity-20 blur-xl rounded-lg max-w-lg mx-auto">
          {order.orderNumber &&
            this.makeListItem("Order Number", order.orderNumber)}
          {order.createdOn &&
            this.makeListItem(
              "Created on",
              new Date(order.createdOn).toLocaleString()
            )}
          {order.total && this.makeListItem("Total amount", order.total)}
          {order.paymentMethod &&
            this.makeListItem("Payment method", order.paymentMethod)}

          <div className="mt-3 space-y-2">
            <h3 className="font-bold text-lg">Products</h3>
            <ul className="space-y-2 max-h-80 overflow-auto px-2">
              {order.products.map((product) => {
                return (
                  <li
                    key={product.id}
                    className="flex flex-col gap-2 justify-center text-skin-base bg-skin-highlight bg-opacity-30 blur-xl rounded-md p-3"
                  >
                    <Link
                      to={`/products/show/${product.id}`}
                      className="font-bold text-lg"
                    >
                      {product.name}
                    </Link>
                    <div className="flex justify-between">
                      <div className="flex gap-2 divide-x-2">
                        <p>Amount: {product.price}</p>
                        {product?.discount && (
                          <p className="pl-2">Discount: {product.discount}</p>
                        )}
                      </div>

                      <p>Qty: {product.quantity}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </ul>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.orders.find(
      (order) => order.id === ownProps.match.params.orderId
    ),
  };
};

export default connect(mapStateToProps)(OrderDetailPage);

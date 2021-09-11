import React from "react";
import { connect } from "react-redux";
import MainWrapper from "../components/MainWrapper";
import BigButton from "../components/BigButton";
import { clearCart, createOrder } from "../actions";
import { v4 as uuidv4 } from "uuid";
import NavigationContext from "../context/NavigationContext";
import { IoArrowBackOutline } from "react-icons/io5";

class CheckoutPage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setHeaderOptions({
      title: "Checkout",
      menu: this.props.cart.length > 0 && [
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

  getTotalPrice = () => {
    return this.props.cart
      .map((item) => item.price * item.quantity)
      .reduce((sum, cur) => sum + cur, 0);
  };

  generateOrder = (method) => {
    const dateString = new Date().toLocaleDateString().split("/").join("");
    const timeString = new Date().toLocaleTimeString().split(":").join("");

    const orderNumber = `${dateString}${timeString}`;

    this.props.createOrder({
      id: uuidv4(),
      orderNumber,
      createdOn: new Date().toISOString(),
      total: this.getTotalPrice(this.props.cart),
      paymentMethod: method,
      products: [...this.props.cart],
    });

    this.props.clearCart();

    this.props.history.push(`/receipt/${orderNumber}`);
  };

  render() {
    if (this.props.cart.length === 0) return null;

    return (
      <MainWrapper>
        <div className="max-w-sm h-full mx-auto rounded-lg flex flex-col justify-evenly">
          <h1 className="text-4xl font-bold text-skin-base">
            To pay : &#8377; {this.getTotalPrice()}
          </h1>
          <ul className="space-y-6">
            <li>
              <BigButton
                onClick={() => {
                  this.generateOrder("cash");
                }}
              >
                Cash payment
              </BigButton>
            </li>
            <li>
              <BigButton
                onClick={() => {
                  this.generateOrder("card");
                }}
              >
                Card payment
              </BigButton>
            </li>
            <li>
              <BigButton
                onClick={() => {
                  this.generateOrder("upi");
                }}
              >
                UPI payment
              </BigButton>
            </li>
            <li>
              <BigButton
                className="bg-skin-negative hover:bg-skin-negative-muted"
                onClick={() => {
                  this.props.clearCart();
                  this.props.history.push("/");
                }}
              >
                Cancel payment
              </BigButton>
            </li>
          </ul>
        </div>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  clearCart,
  createOrder,
})(CheckoutPage);

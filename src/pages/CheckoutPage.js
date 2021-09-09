import React from "react";
import { connect } from "react-redux";
import MainWrapper from "../components/MainWrapper";
import BigButton from "../components/BigButton";
import { clearCart, createOrder } from "../actions";
import history from "../history";
import { v4 as uuidv4 } from "uuid";

const CheckoutPage = ({ cart, clearCart, createOrder }) => {
  const getTotalPrice = (cart) => {
    return cart
      .map((item) => item.price * item.quantity)
      .reduce((sum, cur) => sum + cur, 0);
  };

  const generateOrder = (method) => {
    const dateString = new Date().toLocaleDateString().split("/").join("");
    const timeString = new Date().toLocaleTimeString().split(":").join("");

    const orderNumber = `${dateString}${timeString}`;

    createOrder({
      id: uuidv4(),
      orderNumber,
      createdOn: new Date().toISOString(),
      total: getTotalPrice(cart),
      paymentMethod: method,
      products: [...cart],
    });

    clearCart();

    history.push(`/receipt/${orderNumber}`);
  };

  return (
    <MainWrapper>
      <div className="max-w-sm h-full mx-auto rounded-lg flex flex-col justify-evenly">
        <h1 className="text-4xl font-bold text-white">
          To pay : &#8377; {getTotalPrice(cart)}
        </h1>
        <ul className="space-y-6">
          <li>
            <BigButton
              onClick={() => {
                generateOrder("cash");
              }}
            >
              Cash payment
            </BigButton>
          </li>
          <li>
            <BigButton
              onClick={() => {
                generateOrder("card");
              }}
            >
              Card payment
            </BigButton>
          </li>
          <li>
            <BigButton
              onClick={() => {
                generateOrder("upi");
              }}
            >
              UPI payment
            </BigButton>
          </li>
          <li>
            <BigButton
              className="bg-red-500 hover:bg-red-700"
              onClick={() => {
                clearCart();
                history.push("/");
              }}
            >
              Cancel payment
            </BigButton>
          </li>
        </ul>
      </div>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  clearCart,
  createOrder,
})(CheckoutPage);

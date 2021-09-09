import React from "react";
import MainWrapper from "../components/MainWrapper";
import BigButton from "../components/BigButton";
import { connect } from "react-redux";
import history from "../history";

const ReceiptPage = ({ order }) => {
  return (
    <MainWrapper>
      <div className="max-w-sm h-full mx-auto rounded-lg flex flex-col justify-evenly">
        <h1 className="text-4xl font-bold text-white">
          Order number : {order.orderNumber}
        </h1>
        <ul className="space-y-6">
          <li>
            <BigButton onClick={() => history.push("/")}>
              Print receipt
            </BigButton>
          </li>

          <li>
            <BigButton
              onClick={() => history.push("/")}
              className="bg-red-500 hover:bg-red-700"
            >
              No receipt
            </BigButton>
          </li>
        </ul>
      </div>
    </MainWrapper>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.orders.find(
      (order) => order.orderNumber === ownProps.match.params.orderNumber
    ),
  };
};

export default connect(mapStateToProps)(ReceiptPage);

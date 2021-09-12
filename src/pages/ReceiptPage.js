import React from "react";
import MainWrapper from "../components/MainWrapper";
import BigButton from "../components/BigButton";
import { connect } from "react-redux";
import NavigationContext from "../context/NavigationContext";
import { IoArrowBackOutline } from "react-icons/io5";

class ReceiptPage extends React.Component {
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
      ],
    });
  }

  render() {
    const order = this.props.order;
    if (!order) {
      this.props.history.push(`/404`);
      return null;
    }

    return (
      <MainWrapper>
        <div className="max-w-sm h-full mx-auto rounded-lg flex flex-col justify-evenly">
          <h1 className="text-4xl font-bold text-skin-base">
            Order number : {order.orderNumber}
          </h1>
          <ul className="space-y-6">
            <li>
              <BigButton onClick={() => this.props.history.push("/")}>
                Print receipt
              </BigButton>
            </li>

            <li>
              <BigButton
                onClick={() => this.props.history.push("/")}
                className="bg-skin-negative hover:bg-skin-negative-muted"
              >
                No receipt
              </BigButton>
            </li>
          </ul>
        </div>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.orders.find(
      (order) => order.orderNumber === ownProps.match.params.orderNumber
    ),
  };
};

export default connect(mapStateToProps)(ReceiptPage);

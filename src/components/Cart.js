import { connect } from "react-redux";
import React, { useContext, useState } from "react";
import { removeFromCart, updateCart } from "../actions";
import { IoTrashOutline } from "react-icons/io5";
import { FcInfo } from "react-icons/fc";
import Button from "./Button";
import EditInputValue from "./EditInputValue";
import NavigationContext from "../context/NavigationContext";
import BigButton from "./BigButton";
import history from "../history";

const Cart = ({ cart, removeFromCart, updateCart }) => {
  const [inputUpdateVisiblity, setInputUpdateVisiblity] = useState(null);
  const { setIsModalVisible, setModalType } = useContext(NavigationContext);

  const onSubmitHandler = (val) => {
    setIsModalVisible(false);
    setModalType(null);

    const updatedProduct = cart.find((product) => product.id === val.id);

    const { quantity = null, price = null } = val;

    if (quantity && quantity > 0)
      updateCart({ ...updatedProduct, quantity: +quantity });

    if (price && price <= updatedProduct.price)
      updateCart({
        ...updatedProduct,
        price: +price,
        discount: updatedProduct.price - price,
      });
  };

  const getInputConfig = (name, initialValues, title) => {
    setIsModalVisible(true);
    setModalType("input");
    return {
      fieldName: name,
      initialValues,
      title: title,
      onSubmitHandler,
    };
  };

  const getTotalPrice = () => {
    return cart
      .map((item) => item.price * item.quantity)
      .reduce((sum, cur) => sum + cur, 0);
  };

  if (cart.length === 0)
    return (
      <div className="h-full flex justify-center items-center gap-2 text-skin-base">
        <FcInfo size="2rem" />
        <p className="text-md">Search available products and add here.</p>
      </div>
    );

  return (
    <div className="max-w-lg mx-auto flex flex-col justify-between h-full">
      <ul className="flex flex-col gap-2 px-3 max-h-96 overflow-auto">
        {cart.map((product) => {
          return (
            <li
              key={product.id}
              className="flex flex-col gap-2 justify-center text-skin-base bg-skin-highlight bg-opacity-20 blur-xl rounded-md p-3"
            >
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <IoTrashOutline
                  title="Remove product"
                  className="text-2xl text-skin-negative cursor-pointer"
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 divide-x-2">
                  <Button
                    type="button"
                    onClick={() => {
                      setInputUpdateVisiblity(
                        getInputConfig(
                          "price",
                          {
                            id: product.id,
                            price: product.price,
                          },
                          "Adjust price"
                        )
                      );
                    }}
                  >
                    Amount: {product.price}
                  </Button>
                  {product?.discount && (
                    <p className="pl-2">Discount: {product.discount}</p>
                  )}
                </div>
                <Button
                  type="button"
                  onClick={() => {
                    setInputUpdateVisiblity(
                      getInputConfig(
                        "quantity",
                        {
                          id: product.id,
                          quantity: product.quantity,
                        },
                        "Change quantity"
                      )
                    );
                  }}
                >
                  Qty: {product.quantity}
                </Button>
              </div>
            </li>
          );
        })}

        {inputUpdateVisiblity && <EditInputValue {...inputUpdateVisiblity} />}
      </ul>
      <BigButton
        type="button"
        onClick={() => {
          history.push("/checkout");
        }}
      >
        &#8377; {getTotalPrice()}
      </BigButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  removeFromCart,
  updateCart,
})(Cart);

import { connect } from "react-redux";
import React, { useContext, useEffect, useState } from "react";
import { addToCart, removeFromCart, updateCart } from "../actions";
import { IoTrashOutline } from "react-icons/io5";
import { FcInfo } from "react-icons/fc";
import Button from "./Button";
import EditInputValue from "./EditInputValue";
import NavigationContext from "../context/NavigationContext";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  addToCart,
  removeFromCart,
  selectedProduct,
  updateCart,
}) => {
  const [inputUpdateVisiblity, setInputUpdateVisiblity] = useState(null);
  const { setIsModalVisible, setModalType } = useContext(NavigationContext);

  const onSubmitHandler = (val) => {
    setIsModalVisible(false);
    setModalType(null);

    const updatedProduct = cart.find((product) => product.id === val.id);

    const { quantity = null, price = null } = val;

    if (quantity && quantity > 0)
      updateCart({ ...updatedProduct, quantity: +quantity });

    if (price)
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

  useEffect(() => {
    if (!selectedProduct) return null;

    if (cart.some((product) => product.id === selectedProduct.id)) return null;

    addToCart({ ...selectedProduct, quantity: 1 });
  }, [selectedProduct, cart, addToCart]);

  const getTotalPrice = () => {
    return cart
      .map((item) => item.price * item.quantity)
      .reduce((sum, cur) => sum + cur, 0);
  };

  if (cart.length === 0)
    return (
      <div className="h-full flex justify-center items-center gap-2">
        <FcInfo size="2rem" />
        <p className="text-white text-md">
          Search or scan barcode to add products here.
        </p>
      </div>
    );

  return (
    <React.Fragment>
      <ul className="flex flex-col gap-2 p-3 h-screen max-w-lg mx-auto">
        {cart.length > 0 &&
          cart.map((product) => {
            return (
              <li
                key={product.id}
                className="flex flex-col gap-2 justify-center bg-white bg-opacity-20 blur-xl rounded-md p-3"
              >
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    {product.name}
                  </h2>
                  <IoTrashOutline
                    title="Remove product"
                    className="text-2xl text-red-500 cursor-pointer"
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

      {cart.length > 0 && (
        <Link
          to="/checkout"
          className="bg-blue-500 bg-opacity-40 blur-xl hover:bg-opacity-20 transition-all block text-white text-center max-w-lg mx-auto text-3xl w-full h-14 p-3 sticky -bottom-20 left-0 rounded-lg"
        >
          <span className="font-bold">&#8377; {getTotalPrice()}</span>
        </Link>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  updateCart,
})(Cart);

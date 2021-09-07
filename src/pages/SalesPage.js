import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { IoQrCodeOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

import SearchForm from "../components/SearchForm";
import NavigationContext from "../context/NavigationContext";
// import ModalWithButton from "../components/ModalWithButton";

function SalesPage({ location, products }) {
  const { setCurrentPage, setTabNavigationVisiblity, tabNavigationVisiblity } =
    useContext(NavigationContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location, setCurrentPage]);

  useEffect(() => {
    if (cart.length === 0) setTabNavigationVisiblity(true);
    else setTabNavigationVisiblity(false);
  }, [cart, setTabNavigationVisiblity]);

  const resetSearch = () => {
    setFilteredProducts([]);
    setSearchTerm("");
  };

  const searchHandler = (term) => {
    setSearchTerm(term);

    if (!term) return setFilteredProducts([]);

    setFilteredProducts(
      products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      })
    );
  };

  const getTotalPrice = () => {
    return cart
      .map((item) => item.price * item.quantity)
      .reduce((sum, cur) => sum + cur, 0);
  };

  const updateCart = (action, product) => {
    switch (action) {
      case "ADD":
        setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
        break;
      case "REMOVE":
        setCart((prevState) =>
          prevState.filter((item) => item.id !== product.id)
        );
        break;
      default:
        return null;
    }
  };

  return (
    <main className="relative h-screen">
      <SearchForm
        placeholder="Search products"
        searchTerm={searchTerm}
        setSearchTerm={searchHandler}
      >
        <IoQrCodeOutline className="text-3xl" />
      </SearchForm>
      {searchTerm && (
        <ul className="absolute w-full h-full top-12 py-3 left-0 flex flex-col gap-1 bg-white p-3 divide-y">
          {filteredProducts?.map((product) => (
            <li
              key={product.id}
              className="flex flex-col gap-0 pt-1 cursor-pointer"
              onClick={() => {
                if (!cart.some((item) => item.id === product.id))
                  updateCart("ADD", product);
                resetSearch();
              }}
            >
              <h2 className="text-lg">{product.name}</h2>
              <p className="text-blue-500">Price: {product.price}</p>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <ul className="flex flex-col gap-2 p-3">
          {cart.map((product) => {
            return (
              <li
                key={product.id}
                className="flex flex-col gap-2 justify-center bg-gray-100 rounded-md p-3 cursor-pointer"
              >
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <IoTrashOutline
                    className="text-2xl text-red-500"
                    onClick={() => {
                      updateCart("REMOVE", product);
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <p>Price: {product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {tabNavigationVisiblity || (
        <button
          type="button"
          className="bg-blue-500 text-white text-xl w-full h-14 p-3 fixed bottom-0 left-0"
        >
          Slide right to pay:{" "}
          <span className="font-bold">{getTotalPrice()}</span>
        </button>
      )}
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  };
};

export default connect(mapStateToProps)(SalesPage);

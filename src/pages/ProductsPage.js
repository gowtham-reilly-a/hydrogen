import React, { useEffect, useContext, useState } from "react";

import { connect } from "react-redux";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import NavigationContext from "../context/NavigationContext";
import SearchForm from "../components/SearchForm";
import MainWrapper from "../components/MainWrapper";

const ProductsPage = ({ location, history, products }) => {
  const { setCurrentPage } = useContext(NavigationContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setCurrentPage(location.pathname);
    setFilteredProducts(products);
  }, [location, setCurrentPage, products]);

  const searchHandler = (term) => {
    setSearchTerm(term);

    if (!term) return setFilteredProducts(products);

    setFilteredProducts(
      products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      })
    );
  };

  return (
    <MainWrapper>
      <SearchForm
        placeholder="Search product"
        setSearchTerm={searchHandler}
        searchTerm={searchTerm}
      />

      <div className="flex flex-col gap-3 p-3">
        {filteredProducts?.map((product) => (
          <Link
            to={`/products/show/${product.id}`}
            key={product.id}
            className="flex flex-col gap-2 bg-gray-200 rounded-md p-3"
          >
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Stock: {product.stock || "Not set"}</p>
          </Link>
        ))}
      </div>

      <button
        className="sticky bottom-24 bg-blue-500 rounded-full p-1"
        onClick={() => history.push("/products/create")}
        type="button"
      >
        <IoAddOutline className="text-4xl text-white" />
      </button>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  };
};

export default connect(mapStateToProps)(ProductsPage);

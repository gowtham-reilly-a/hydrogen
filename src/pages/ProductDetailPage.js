import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { updateProduct } from "../actions";
import useTopbarNavigation from "../hooks/useTopbarNavigation";

const ProductDetailPage = ({ product, updateProduct }) => {
  useTopbarNavigation(product.name);

  const [updateStockVisiblity, setUpdateStockVisiblity] = useState(false);
  const [stock, setStock] = useState("");

  if (!product) return null;

  return (
    <main>
      <div className="flex flex-col gap-3 bg-gray-200 p-3 h-screen">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>Price: {product.price}</p>
        <p>Supplier: {product.supplier}</p>
        <p>Brand: {product.brand}</p>
        <p>SKU: {product.sku}</p>
        <p>Stock: {product.stock}</p>
        <p>Barcode: {product.barcode}</p>
      </div>

      <div className="sticky bottom-0 left-0 w-full">
        {updateStockVisiblity && (
          <div className="flex justify-between items-center gap-6 bg-gray-100 h-12 px-3 mt-3">
            <input
              autoFocus
              type="number"
              min="1"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              name="stock"
              id="stock"
              placeholder="Stock"
              className="h-full w-full border-none outline-none form-text bg-gray-100"
            />
            <button
              className="text-blue-500"
              type="button"
              onClick={() => {
                if (stock > 0)
                  updateProduct({ ...product, stock: product.stock + +stock });
                setStock("");
                setUpdateStockVisiblity(false);
              }}
            >
              Add
            </button>
            <button
              className="text-red-500"
              type="button"
              onClick={() => {
                if (product.stock > 1 && stock > 0)
                  updateProduct({ ...product, stock: product.stock - +stock });
                setStock("");
                setUpdateStockVisiblity(false);
              }}
            >
              Remove
            </button>
          </div>
        )}

        {!updateStockVisiblity && (
          <div className="flex justify-around bg-blue-500 text-white font-bold items-center h-14 gap-1">
            <button type="button" onClick={() => setUpdateStockVisiblity(true)}>
              Update stock
            </button>
            <Link to={`/products/edit/${product.id}`}>Edit product</Link>
          </div>
        )}
      </div>
    </main>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { updateProduct })(ProductDetailPage);

import React, { useContext, useState } from "react";

import NavigationContext from "../context/NavigationContext";
import SearchForm from "./SearchForm";
import Modal from "./Modal";

const LiveSearch = ({ data, onClickHandler, title, placeholder }) => {
  const { modalType } = useContext(NavigationContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchHandler = (term) => {
    setSearchTerm(term);

    if (!term) return setFilteredProducts([]);

    setFilteredProducts(
      data.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      })
    );
  };

  if (modalType !== "search") return null;

  return (
    <Modal title={title}>
      <SearchForm
        placeholder={placeholder}
        searchTerm={searchTerm}
        setSearchTerm={searchHandler}
      ></SearchForm>

      {searchTerm && (
        <ul className="w-full max-h-60 overflow-y-auto py-3 flex flex-col gap-1 bg-white p-3 divide-y">
          {filteredProducts?.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                onClickHandler(item.id);
                setFilteredProducts([]);
                setSearchTerm("");
              }}
            >
              <button
                type="button"
                className="flex flex-col gap-0 pt-1 cursor-pointer w-full"
              >
                <h2 className="text-lg">{item.name}</h2>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Modal>
  );
};

export default LiveSearch;

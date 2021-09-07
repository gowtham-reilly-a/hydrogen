import React from "react";

import { IoSearchOutline } from "react-icons/io5";

export default function SearchForm({
  placeholder,
  setSearchTerm,
  searchTerm,
  children,
}) {
  return (
    <div className="flex gap-2 items-center h-12 mx-3 px-2 bg-gray-100 rounded-xl">
      <IoSearchOutline className="text-3xl" />
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        autoComplete="off"
        className="w-full bg-gray-100 text-md h-full outline-none"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      {children}
    </div>
  );
}

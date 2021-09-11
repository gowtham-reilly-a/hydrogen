import React from "react";

import { IoSearchOutline } from "react-icons/io5";

export default function SearchForm({ placeholder, setSearchTerm, searchTerm }) {
  return (
    <div className="w-full flex gap-2 items-center h-12 px-2 bg-skin-highlight bg-opacity-20 text-skin-base rounded-xl">
      <IoSearchOutline className="text-3xl" />
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        autoComplete="off"
        className="w-full bg-transparent text-lg h-full outline-none"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        autoFocus
      />
    </div>
  );
}

import React, { useContext } from "react";

import history from "../../history";
import NavigationContext from "../../context/NavigationContext";

import { IoArrowBackOutline } from "react-icons/io5";

export default function SecondaryHeader() {
  const { topbarTitle } = useContext(NavigationContext);

  return (
    <header className="sticky top-0 left-0 w-full h-12 flex justify-between items-center px-3 border border-gray-100 text-gray-500 bg-white">
      <IoArrowBackOutline
        className="text-3xl cursor-pointer"
        onClick={() => history.goBack()}
      />
      <div className="flex-1">
        <p className="font-bold text-lg pl-4">{topbarTitle}</p>
      </div>
    </header>
  );
}

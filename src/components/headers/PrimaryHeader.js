import React, { useContext } from "react";

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";

import NavigationContext from "../../context/NavigationContext";

export default function PrimaryHeader() {
  const { setSideDrawerVisiblity } = useContext(NavigationContext);

  return (
    <header className="sticky top-0 left-0 w-full h-12 flex justify-between items-center text-2xl px-3 border border-gray-100 text-gray-500 bg-white z-10">
      <IoPersonCircleOutline
        className="text-3xl"
        onClick={() => setSideDrawerVisiblity(true)}
      />
      <div>
        <h1 className="font-bold">Hydrogen</h1>
      </div>
      <IoBarChartOutline className="text-2xl" />
    </header>
  );
}

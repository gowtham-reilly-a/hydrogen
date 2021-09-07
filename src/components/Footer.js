import React, { useContext } from "react";

import { IoCartOutline } from "react-icons/io5";
import { IoReceiptOutline } from "react-icons/io5";
import { IoFileTrayStackedOutline } from "react-icons/io5";

import IconLink from "./IconLink";
import NavigationContext from "../context/NavigationContext";

export default function Footer() {
  const { tabNavigationVisiblity } = useContext(NavigationContext);

  if (!tabNavigationVisiblity) return null;

  return (
    <footer className="sticky bottom-0 left-0 z-10 w-full h-14 flex justify-around items-center border-t border-gray-100 text-gray-500 bg-white">
      <IconLink
        path="/"
        title="Sale"
        icon={<IoCartOutline className="text-4xl" />}
      />
      <IconLink
        path="/history"
        title="History"
        icon={<IoReceiptOutline className="text-3xl" />}
      />
      <IconLink
        path="/products"
        title="Products"
        icon={<IoFileTrayStackedOutline className="text-3xl" />}
      />
    </footer>
  );
}

import React from "react";
import IconLink from "./IconLink";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoReceiptOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";

export default function SideDrawer() {
  return (
    <aside className="sticky top-0 left-0 space-y-6 w-1/5 h-full text-gray-400 bg-gray-800 border-r border-black p-6">
      <IconLink
        path="/"
        title="Sale"
        icon={<IoBagHandleOutline size="2rem" />}
      />
      <IconLink
        path="/history"
        title="History"
        icon={<IoReceiptOutline size="2rem" />}
      />
      <IconLink
        path="/products"
        title="Products"
        icon={<IoStorefrontOutline size="2rem" />}
      />
    </aside>
  );
}

import React from "react";
import IconLink from "./IconLink";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { VscHistory } from "react-icons/vsc";

export default function SideDrawer() {
  return (
    <aside className="sticky top-0 left-0 space-y-6 w-1/5 h-full text-skin-base bg-skin-base border-r border-skin-base p-6">
      <IconLink
        path="/"
        title="Bag"
        icon={<IoBagHandleOutline size="2rem" />}
      />
      <IconLink
        path="/orders"
        title="Orders"
        icon={<VscHistory size="2rem" />}
      />
      <IconLink
        path="/products"
        title="Products"
        icon={<IoStorefrontOutline size="2rem" />}
      />
    </aside>
  );
}

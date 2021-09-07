import React, { useContext } from "react";

import NavigationContext from "../context/NavigationContext";

export default function SideDrawer() {
  const { sideDrawerVisiblity, setSideDrawerVisiblity } =
    useContext(NavigationContext);

  return (
    <button
      className={`${
        sideDrawerVisiblity ? "flex" : "hidden"
      } fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 z-20`}
      onClick={() => setSideDrawerVisiblity(false)}
    >
      <div className="bg-white w-4/5 h-full">
        <ul>
          <li>Bookmark</li>
          <li>Account</li>
          <li>App Store</li>
          <li>Settings</li>
          <li>Language</li>
        </ul>
      </div>
    </button>
  );
}

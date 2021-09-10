import React, { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import { v4 as uuidv4 } from "uuid";

export default function Header() {
  const { headerOptions } = useContext(NavigationContext);

  const { title = null, menu = null } = headerOptions;

  return (
    <header className="w-full bg-gray-800 text-white h-12 px-6 flex items-center justify-between border-b border-black">
      <div className="flex gap-6">
        {menu &&
          menu.map((item) => (
            <React.Fragment key={uuidv4()}>{item}</React.Fragment>
          ))}
      </div>
      <h1 className="flex-1 text-center">{title}</h1>
      <div className="">Profile</div>
    </header>
  );
}

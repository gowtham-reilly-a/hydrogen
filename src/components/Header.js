import React, { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import { v4 as uuidv4 } from "uuid";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function Header() {
  const { headerOptions, theme, setTheme } = useContext(NavigationContext);

  const { title = null, menu = null } = headerOptions;

  return (
    <header className="w-full bg-skin-base text-skin-base h-12 px-6 flex items-center justify-between border-b border-skin-base">
      <div className="flex gap-6">
        {menu &&
          menu.map((item) => (
            <React.Fragment key={uuidv4()}>{item}</React.Fragment>
          ))}
      </div>
      <h1 className="flex-1 text-center font-bold text-xl">{title}</h1>
      <div className="flex">
        {theme === "light" ? (
          <IoMoonOutline
            title="Switch to dark theme"
            size="1.5rem"
            onClick={() => {
              setTheme("dark");
            }}
            className="cursor-pointer"
          />
        ) : (
          <IoSunnyOutline
            title="Switch to light theme"
            size="1.5rem"
            onClick={() => {
              setTheme("light");
            }}
            className="cursor-pointer"
          />
        )}
      </div>
    </header>
  );
}

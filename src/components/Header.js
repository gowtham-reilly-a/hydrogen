import React, { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import { v4 as uuidv4 } from "uuid";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { changeTheme } from "../actions";

const Header = ({ theme, changeTheme }) => {
  const { headerOptions } = useContext(NavigationContext);
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
        {theme === "dark" ? (
          <IoSunnyOutline
            title="Switch to light theme"
            size="1.5rem"
            onClick={() => {
              changeTheme("light");
            }}
            className="cursor-pointer"
          />
        ) : (
          <IoMoonOutline
            title="Switch to dark theme"
            size="1.5rem"
            onClick={() => {
              changeTheme("dark");
            }}
            className="cursor-pointer"
          />
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.preferences.theme,
  };
};

export default connect(mapStateToProps, { changeTheme })(Header);

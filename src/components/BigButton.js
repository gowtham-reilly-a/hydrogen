import React from "react";

const BigButton = ({ children, className: classes, ...rest }) => {
  return (
    <button
      type="button"
      className={` transition-all text-white w-full p-3 rounded-lg text-center text-lg font-semibold bg-opacity-80 blur-xl hover:bg-opacity-100 ${
        classes || "bg-skin-accent"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BigButton;

import React from "react";

const BigButton = ({ children, className: classes, ...rest }) => {
  return (
    <button
      type="button"
      className={` transition-all text-white w-full p-3 rounded-lg text-center text-xl font-bold bg-opacity-80 blur-xl hover:bg-opacity-100 ${
        classes || "bg-blue-500"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BigButton;

import React from "react";

const Button = ({ className: classes, children, ...rest }) => {
  return (
    <button
      className={`${
        classes || "text-blue-500 hover:text-blue-600"
      }  font-bold text-lg transition-all`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

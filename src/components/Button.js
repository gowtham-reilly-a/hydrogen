import React from "react";

const Button = ({ className: classes, children, ...rest }) => {
  return (
    <button
      className={`${
        classes || "text-skin-accent hover:text-skin-accent-muted"
      }  font-semibold transition-all`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

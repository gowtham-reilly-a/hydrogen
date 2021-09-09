import React from "react";

const FormInput = ({ className: classes, ...rest }) => {
  return (
    <input
      autoComplete="off"
      autoFocus
      className={`${
        classes || ""
      } w-full bg-transparent text-lg h-12 px-2 rounded-lg outline-none`}
      {...rest}
    />
  );
};

export default FormInput;

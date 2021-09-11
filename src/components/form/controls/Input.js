import React from "react";

import { Field, ErrorMessage } from "formik";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold text-lg">
        {label}
      </label>
      <Field
        name={name}
        id={name}
        className="form-input w-full bg-skin-highlight bg-opacity-30 blur-lg text-md h-full outline-none rounded-md p-3"
        {...rest}
      />
      <ErrorMessage name={name}>
        {(errMsg) => <div className="text-skin-negative">{errMsg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Input;

import React from "react";

import { Field, ErrorMessage } from "formik";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold text-lg">
        {label}
      </label>
      <Field
        name={name}
        as="select"
        id={name}
        className="form-input w-full bg-gray-100 text-md h-full outline-none rounded-md p-3"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name}>
        {(errMsg) => <div className="text-red-500">{errMsg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Select;

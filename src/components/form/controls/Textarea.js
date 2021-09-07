import React from "react";

import { Field, ErrorMessage } from "formik";

const Textarea = ({ name, label, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold text-lg">
        {label}
      </label>
      <Field
        name={name}
        as="textarea"
        id={name}
        className="form-input w-full bg-gray-100 text-md h-full outline-none rounded-md p-3"
        {...rest}
      />
      <ErrorMessage name={name}>
        {(errMsg) => <div className="text-red-500">{errMsg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Textarea;

import React from "react";

import { Field, ErrorMessage } from "formik";

const Checkbox = ({ name, label, options, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold text-lg">
        {label}
      </label>
      <Field
        name={name}
        {...rest}
        className="form-input w-full bg-gray-100 text-md h-full outline-none rounded-md p-3"
      >
        {({ field }) => {
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                value={option.value}
                {...field}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errMsg) => <div className="text-red-500">{errMsg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Checkbox;

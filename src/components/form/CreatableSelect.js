import React from "react";
import Creatable from "react-select/creatable";

const CreatableSelect = ({ label, name, options, formik, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold text-lg">
        {label}
      </label>
      <Creatable
        id={name}
        isClearable
        {...rest}
        onChange={(val) => {
          if (!val?.value) return null;
          formik.setFieldValue(name, val.value);
        }}
        options={options}
      />
    </div>
  );
};

export default CreatableSelect;

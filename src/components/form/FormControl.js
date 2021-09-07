import React from "react";

import Input from "./controls/Input";
import Textarea from "./controls/Textarea";
import Select from "./controls/Select";
import Radio from "./controls/Radio";
import Checkbox from "./controls/Checkbox";

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
    default:
      return null;
  }
};

export default FormControl;

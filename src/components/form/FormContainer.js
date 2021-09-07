import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

const FormContainer = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Work with me", value: "work" },
    { key: "Discuss with me", value: "discuss" },
  ];

  const radioOptions = [
    { key: "Work with me", value: "Work" },
    { key: "Discuss with me", value: "Discuss" },
  ];

  const checkboxOptions = [
    { key: "Work with me", value: "Work" },
    { key: "Discuss with me", value: "Discuss" },
  ];

  const initialValues = {
    name: "",
    description: "",
    reason: "",
    intention: "",
    expectations: [],
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Description is required"),
    reason: Yup.string().required("Reason is required"),
    intention: Yup.string().required("Reason is required"),
    expectations: Yup.array().required("Expectations are required"),
  });
  const onSubmit = (values) => console.log("Form data: ", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <FormControl
              control="input"
              type="text"
              label="Product name"
              name="name"
            />
            <FormControl
              control="textarea"
              label="Description"
              name="description"
            />
            <FormControl
              control="select"
              label="Reason"
              name="reason"
              options={dropdownOptions}
            />
            <FormControl
              control="radio"
              label="Intention"
              name="intention"
              options={radioOptions}
            />
            <FormControl
              control="checkbox"
              label="Expectations"
              name="expectations"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormContainer;

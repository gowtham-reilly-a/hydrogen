import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import NavigationContext from "../context/NavigationContext";
import Modal from "./Modal";

const EditInputValue = ({
  onSubmitHandler,
  fieldName,
  initialValues,
  title,
}) => {
  const { modalType } = useContext(NavigationContext);

  if (modalType !== "input") return null;

  const [firstLetter, ...rest] = fieldName;
  const name = firstLetter.toUpperCase() + rest.join("");

  return (
    <Modal title={title}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          [fieldName]: Yup.number(`${name} must be a number`)
            .required(`${name} cannot be empty`)
            .positive(`${name} must be a positive number`)
            .min(0, `${name} must be at least zero`),
        })}
        onSubmit={onSubmitHandler}
      >
        <Form className="flex flex-col space-y-6 items-end">
          <Field
            name={fieldName}
            type="number"
            className="text-4xl w-1/2 mx-auto block text-center border-b-2 border-blue-500 font-bold outline-none"
            placeholder={initialValues[fieldName]}
            autoFocus
          />
          <ErrorMessage name={fieldName}>
            {(errMsg) => <p className="text-red-500">{errMsg}</p>}
          </ErrorMessage>
          <button type="submit" className="text-blue-500">
            Update {fieldName}
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default EditInputValue;

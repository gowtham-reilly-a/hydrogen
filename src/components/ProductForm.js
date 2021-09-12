import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./form/FormControl";
import CreatableSelect from "./form/CreatableSelect";
import { connect } from "react-redux";
import BigButton from "./BigButton";

const initialValues = {
  name: "",
  brand: "",
  supplier: "",
  price: "",
  barcode: "",
  stock: "",
  sku: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Product name is required")
    .min(3, "Product name must be at least 3 characters long"),
  brand: Yup.string().min(
    3,
    "Product brand name must be at least 3 characters long"
  ),
  supplier: Yup.string().min(
    3,
    "Supplier brand name must be at least 3 characters long"
  ),
  price: Yup.number()
    .required("Price is required")
    .positive("Positive values only accepted"),
  stock: Yup.number().positive("Positive values only accepted"),
  barcode: Yup.number().positive("Positive values only accepted"),
  sku: Yup.string(),
});

function ProductForm({ brands, suppliers, onSubmit, product, title }) {
  return (
    <Formik
      initialValues={product || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form className="flex flex-col gap-6 text-skin-base bg-skin-base bg-opacity-40 blur-xl rounded-lg p-4">
            <FormControl
              control="input"
              name="barcode"
              label="Barcode"
              type="number"
              min="0"
              placeholder="Barcode"
            />
            <FormControl
              control="input"
              name="name"
              label="Product name"
              placeholder="Type product name"
            />

            <FormControl
              control="input"
              name="price"
              label="Price"
              type="number"
              min="0"
              placeholder="Selling price"
            />

            <FormControl
              control="input"
              name="stock"
              label="Stock"
              type="number"
              min="0"
              placeholder="Stock"
            />

            <CreatableSelect
              label="Product brand"
              name="brand"
              formik={formik}
              placeholder="Search or create brand"
              options={brands}
              className="text-black"
            />

            <CreatableSelect
              label="Product supplier"
              name="supplier"
              formik={formik}
              placeholder="Search or create supplier"
              options={suppliers}
              className="text-black"
            />

            <FormControl
              control="input"
              name="sku"
              label="SKU"
              type="text"
              placeholder="Stock keeping unit"
            />

            <BigButton
              type="submit"
              disabled={!formik.isValid}
            >{`${title} product`}</BigButton>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapStateToProps = (state) => {
  const getOptions = (products, property) => {
    return Object.values(products)
      .filter((product) => (product ? true : false))
      .map((product) => {
        return { label: product[property], value: product[property] };
      });
  };

  return {
    brands: getOptions(state.products, "brand"),
    suppliers: getOptions(state.products, "supplier"),
  };
};

export default connect(mapStateToProps)(ProductForm);

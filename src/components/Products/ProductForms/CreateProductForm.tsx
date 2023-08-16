import React, { useImperativeHandle, forwardRef } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { Button, Container, TextField, Grid } from "@mui/material";
import { generateRandomInitialValues } from "../../../utils/faker";
import { CreateProduct } from "../../../store/newProducts/actionCreators/createProduct";
import { object, string, number, array } from "yup";

let initialFormValues: CreateProduct = {
  title: "",
  price: 0,
  description: "",
  categoryId: 0,
  images: [...Array(3)].map(() => ""),
};

const validationSchema = object({
  title: string().required("Title is required"),
  price: number()
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
  description: string().required("Description is required"),
  categoryId: number().required("Category ID is required"),
  images: array().of(string().url("Invalid URL format")),
});

export type CreateProductFormMethod = {
  getFormData: () => CreateProduct;
};

const CreateProductForm = forwardRef<CreateProductFormMethod>((props, ref) => {
  const [formValue, setFormValue] = React.useState(initialFormValues);

  const heandleSubmit = () => {};

  const getFormData = () => {
    return formValue;
  };

  useImperativeHandle(ref, () => ({
    getFormData,
  }));

  const createRandomProduct = (setValues: (values: CreateProduct) => void) => {
    const randomValues = generateRandomInitialValues();
    setValues(randomValues);
    setFormValue(randomValues);
  };

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={formValue}
        validationSchema={validationSchema}
        onSubmit={heandleSubmit}
      >
        {({ values, setValues, resetForm }: FormikProps<CreateProduct>) => (
          <Form>
            <Button onClick={() => console.log(values)}>Get</Button>
            <Button
              type="button"
              variant="contained"
              onClick={() => createRandomProduct(setValues)}
            >
              Generate Random Values
            </Button>
            <Button
              type="button"
              variant="contained"
              color="warning"
              onClick={() => {
                resetForm();
                setValues(initialFormValues);
              }}
            >
              Reset
            </Button>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Title"
                  type="text"
                  name="title"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.title}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Price"
                  type="text"
                  name="price"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.price}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Description"
                  type="text"
                  name="description"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.description}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Category ID"
                  type="text"
                  name="categoryId"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.categoryId}
                />
              </Grid>
              {values.images.map((image, idx) => (
                <Grid item xs={12} key={idx} onClick={() => console.log(image)}>
                  <Field
                    as={TextField}
                    label="Image URL"
                    type="text"
                    name={`imgage ${idx}`}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={image}
                  />
                </Grid>
              ))}
              {/* <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Create Product
                </Button>
                <Button
                  onClick={() => {
                    createRandomProduct();
                  }}
                >
                  Random
                </Button>
                <Button onClick={() => console.log(myValues)}>
                  Get Values
                </Button>
              </Grid> */}
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
});

export default CreateProductForm;

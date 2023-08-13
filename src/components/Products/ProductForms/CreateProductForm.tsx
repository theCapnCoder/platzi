import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { Button, Container, TextField, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { generateRandomInitialValues } from "../../../utils/faker";

export type CreateProductFormValues = {
  title: string;
  price: string;
  description: string;
  categoryId: string;
  images: string;
};

let initialFormValues: CreateProductFormValues = {
  title: "oone",
  price: "",
  description: "",
  categoryId: "",
  images: "",
};

const CreateProductForm: React.FC = () => {
  const dispatch = useDispatch();
  const [myValues, setMyValues] = React.useState(initialFormValues);

  const handleSubmit = (values: CreateProductFormValues) => {
    // dispatch(createProduct(values));
  };

  const createRandomProduct = () => {
    const randomValues = generateRandomInitialValues();
    setMyValues(randomValues);
  };

  const handleRandomValues = (
    setValues: (values: CreateProductFormValues) => void
  ) => {
    const randomValues = generateRandomInitialValues(); // Generate random values
    setValues(randomValues); // Set the random values to the form fields
  };

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={myValues}
        onSubmit={handleSubmit}
      >
        {({ values, setValues }: FormikProps<CreateProductFormValues>) => (
          <Form>
            <Button
              type="button"
              variant="contained"
              onClick={() => handleRandomValues(setValues)}
            >
              Generate Random Values
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
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Image URL"
                  type="text"
                  name="images[0]"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.images}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateProductForm;

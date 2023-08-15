import React, { useImperativeHandle, forwardRef } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { Button, Container, TextField, Grid } from "@mui/material";
import { generateRandomInitialValues } from "../../../utils/faker";
import { CreateProduct } from "../../../store/newProducts/actionCreators/createProduct";

let initialFormValues: CreateProduct = {
  title: "",
  price: 0,
  description: "",
  categoryId: 0,
  images: [...Array(3)].map(() => ""),
};

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
      <Formik initialValues={formValue} onSubmit={heandleSubmit}>
        {({ values, setValues }: FormikProps<CreateProduct>) => (
          <Form>
            <Button
              type="button"
              variant="contained"
              onClick={() => createRandomProduct(setValues)}
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

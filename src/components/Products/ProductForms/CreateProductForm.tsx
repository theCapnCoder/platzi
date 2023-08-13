import React from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import { Button, Container, TextField, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

interface ProductFormValues {
  title: string;
  price: string;
  description: string;
  categoryId: string;
  images: string[];
}

const initialFormValues: ProductFormValues = {
  title: '',
  price: '',
  description: '',
  categoryId: '',
  images: [],
};

const CreateProductForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: ProductFormValues) => {
    // dispatch(createProduct(values));
  };

  return (
    <Container maxWidth="sm">
      <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
        {({ values }: FormikProps<ProductFormValues>) => (
          <Form>
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Create Product
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

import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import {
  Autocomplete,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
} from "@mui/material";

import {
  CreateProduct,
  createProductAsync,
} from "../../../../store/newProducts/actionCreators/createProduct";
import { generateRandomInitialValues } from "../../../../utils/faker";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { selectAllCategories } from "../../../../store/categories/categoriesSlice";
import { initialFormValues, validationSchema } from "./constants";
import { Props } from "./type";

const CreateProductForm = ({ open, onClose }: Props) => {
  const [formValue, setFormValue] = React.useState(initialFormValues);
  const dispatch = useAppDispatch();

  const categoryOptions = useAppSelector(selectAllCategories);

  const heandleSubmit = (values: any) => {
    dispatch(createProductAsync(values));
    setFormValue(initialFormValues);
    onClose();
  };

  const createRandomProduct = (setValues: (values: CreateProduct) => void) => {
    const randomValues = generateRandomInitialValues(
      categoryOptions.map((c) => c.id)
    );
    setValues(randomValues);
    setFormValue(randomValues);
  };

  const handleCLose = () => {
    setFormValue(initialFormValues);
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleCLose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ textTransform: "capitalize" }}>
          Create Product
        </DialogTitle>
        <DialogContent>
          <Container maxWidth="sm">
            <Formik
              initialValues={formValue}
              validationSchema={validationSchema}
              onSubmit={heandleSubmit}
            >
              {({
                values,
                setValues,
                resetForm,
                errors,
                touched,
              }: FormikProps<CreateProduct>) => (
                <Form>
                  <Stack direction={"row"} spacing={2}>
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
                  </Stack>

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
                        error={touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
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
                        value={values.price === 0 ? "" : values.price}
                        error={touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
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
                        error={touched.description && !!errors.description}
                        helperText={touched.description && errors.description}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        options={categoryOptions}
                        getOptionLabel={(option) => option.name}
                        onChange={(_, value) => {
                          setValues({
                            ...values,
                            categoryId: value?.id || 0,
                          });
                        }}
                        value={
                          values.categoryId === 0
                            ? null
                            : categoryOptions.find(
                                (option) => option.id === values.categoryId
                              ) || null
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Category ID"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={touched.categoryId && !!errors.categoryId}
                            helperText={touched.categoryId && errors.categoryId}
                          />
                        )}
                      />
                    </Grid>

                    {values.images.map((image, idx) => (
                      <Grid
                        item
                        xs={12}
                        key={idx}
                        onClick={() => console.log(image)}
                      >
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
                  </Grid>
                  <DialogActions>
                    <Button onClick={handleCLose} color="primary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Create
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProductForm;

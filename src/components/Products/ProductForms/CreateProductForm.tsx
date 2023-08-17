import React, { useImperativeHandle, forwardRef } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import {
  Button,
  Container,
  TextField,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Autocomplete,
} from "@mui/material";
import { generateRandomInitialValues } from "../../../utils/faker";
import { CreateProduct } from "../../../store/newProducts/actionCreators/createProduct";
import { object, string, number, array } from "yup";
import { useAppSelector } from "../../../store/hook";
import { selectAllCategories } from "../../../store/categories/categoriesSlice";

// let initialFormValues: Omit<CreateProduct, "price"> & {
//   price: number | string;
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

type Props = {
  open: boolean;
  onClose: () => void;
};

const CreateProductForm = ({ open, onClose }: Props) => {
  const [formValue, setFormValue] = React.useState(initialFormValues);

  const categoryOptions = useAppSelector(selectAllCategories);

  const heandleSubmit = (e: any) => {
    console.log(e);
  };

  const createRandomProduct = (setValues: (values: CreateProduct) => void) => {
    const randomValues = generateRandomInitialValues();
    setValues(randomValues);
    setFormValue(randomValues);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
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
                    <Button onClick={onClose} color="primary">
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

// UpdateProductForm.tsx

import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  price: yup.string().required("Price is required"),
  description: yup.string().required("Description is required"),
  categoryId: yup.string().required("Category is required"),
});

const UpdateProductForm= () => {

  const initialValues = {
    title: "",
    price: "",
    description: "",
    categoryId: "",
    images: [],
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // dispatch(updateProduct(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Category"
            name="categoryId"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
            error={
              formik.touched.categoryId && Boolean(formik.errors.categoryId)
            }
            helperText={formik.touched.categoryId && formik.errors.categoryId}
          />
        </Grid>
        <Grid item xs={12}>
          {/* Your image upload component */}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Update Product
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UpdateProductForm;

import React, { Fragment } from "react";
import { Field, ErrorMessage, FieldProps, FormikProps } from "formik";
import { TextField } from "@mui/material";

interface TextInputProps {
  label: string;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name }) => {
  return (
    <div>
      <Field name={name}>
        {(fieldProps: FieldProps<any, FormikProps<any>>) => {
          const { field, form } = fieldProps;
          const error = form.errors[name as keyof typeof form.errors];
          const touched =
            form.touched[name as keyof typeof form.touched] || false;

          return (
            <div>
              <TextField
                {...field}
                label={label}
                variant="outlined"
                fullWidth
              />
              {touched && (
                <Fragment>
                  {" "}
                  {/* Use Fragment to wrap the error */}
                  {/* {error && <div>{error}</div>} */}
                </Fragment>
              )}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default TextInput;

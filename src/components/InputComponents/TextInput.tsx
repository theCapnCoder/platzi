import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';
import * as yup from 'yup';

interface TextInputProps {
  label: string;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name }) => {
  const validationSchema = yup.object({
    [name]: yup.string().required(`${label} is required`),
  });

  return (
    <div>
      {/* <Field name={name} validate={(value: string) => validationSchema.fields[name].validate(value)}>
        {({ field }: { field: any }) => (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            fullWidth
          />
        )}
      </Field> */}
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default TextInput;

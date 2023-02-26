import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import { useState } from "react";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <FormControlLabel
        {...field}
        {...props}
        control={<Checkbox />}
        label={label}
      />

      <Typography variant="caption" color="red">
        <ErrorMessage name={props.name} component="span" />
      </Typography>
    </>
  );
};

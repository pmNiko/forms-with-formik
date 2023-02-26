import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import { useState } from "react";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [checked, setChecked] = useState(true);
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        }
        label={
          <Typography variant="subtitle2">
            Deseo adherirme a la factura electronica por email.
          </Typography>
        }
        {...field}
        {...props}
      />
      <Typography variant="caption" color="red">
        <ErrorMessage name={props.name} component="span" />
      </Typography>
    </>
  );
};

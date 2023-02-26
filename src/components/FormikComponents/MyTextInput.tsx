import { TextField, Typography } from "@mui/material";
import { ErrorMessage, useField } from "formik";

/* Interface Props to MyTextInput */
interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  classLabel?: string;
  classInput?: string;
  classError?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <TextField
        label={label}
        {...props}
        {...field}
        InputLabelProps={{
          sx: {
            color: "rgb(156, 156, 156)",
          },
        }}
      />
      <Typography variant="caption" color="red">
        <ErrorMessage name={props.name} component="span" />
      </Typography>
    </>
  );
};

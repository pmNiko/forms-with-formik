import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  [x: string]: any;
}
export const MySelect = ({ label, defaultValue, options, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <FormControl fullWidth {...props}>
        <InputLabel
          id="select-label"
          htmlFor={props.id || props.name}
          sx={{ color: "#030303" }}
        >
          {label}
        </InputLabel>
        <Select
          {...field}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          value={defaultValue}
        >
          {options.map((opt, i) => (
            <MenuItem key={opt.label + i} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="caption" color="red">
        <ErrorMessage name={props.name} component="span" />
      </Typography>
    </>
  );
};

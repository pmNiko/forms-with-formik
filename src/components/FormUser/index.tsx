import { Formik, Field, Form } from "formik";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import {
  CustomPopUp,
  MyCheckbox,
  MySelect,
  MyTextInput,
} from "../FormikComponents";
import * as yup from "yup";

interface Props {
  firstname: string;
  lastname: string;
  age: number;
  sex: "male" | "female" | string;
}

export const FormUser = ({ firstname, lastname, age, sex }: Props) => {
  return (
    <div>
      <Typography variant="button">Formulario de usuario</Typography>
      <Formik
        initialValues={{
          firstname,
          lastname,
          age: age > 0 ? age : "",
          sex,
          terms: false,
        }}
        validationSchema={yup.object({
          firstname: yup.string().required("Requerido"),
          lastname: yup.string().required("Requerido"),
          age: yup.number().required("Debe ingresar el monto sin decimales."),
          sex: yup.string().required("Requerido"),
          terms: yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
        })}
        onSubmit={(data) => console.log("Enviando datos a la api: ", data)}
      >
        <Form>
          <Stack direction="column" spacing={4}>
            <Box display="flex" flexDirection="column" mt={3}>
              <MyTextInput
                label="Nombre"
                name="firstname"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <CustomPopUp help={"Ingrese su Nombre Completo."} />
                  ),
                }}
              />
            </Box>

            <Box display="flex" flexDirection="column" mt={3}>
              <MyTextInput
                label="Apellido"
                name="lastname"
                variant="standard"
              />
            </Box>

            <Box display="flex" flexDirection="column" mt={3}>
              <MyTextInput label="Edad" name="age" variant="standard" />
            </Box>

            <Box display="flex" flexDirection="column" mt={3}>
              <MySelect
                label="Sexo"
                name="sex"
                variant="standard"
                options={[
                  { label: "Masculino", value: "male" },
                  { label: "Femenino", value: "female" },
                ]}
              />
            </Box>

            <Box display="flex" flexDirection="column" mt={3}>
              <MyCheckbox label="Acepto los terminos!" name="terms" />
            </Box>

            <Box display="flex" flexDirection="column" mt={3}>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Box>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

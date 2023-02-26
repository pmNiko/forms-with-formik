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

const defaultName = "Juan";
const defaultAge = 2;

export const FormFormik = () => {
  return (
    <div>
      <Typography variant="button">Darse de alta</Typography>
      <Formik
        initialValues={{
          firstname: defaultName,
          lastname: "Juarez",
          age: defaultAge > 0 ? defaultAge : 23,
          sex: "male",
          terms: false,
        }}
        onSubmit={(data) => console.log("Data de resgistro: ", data)}
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
              <MyTextInput
                label="Edad"
                name="age"
                type="number"
                variant="standard"
              />
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

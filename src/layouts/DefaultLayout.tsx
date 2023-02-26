import { Box } from "@mui/system";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

interface Props {
  children: JSX.Element | JSX.Element;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

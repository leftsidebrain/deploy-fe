import { Box } from "@mui/material";
import RegisterForm from "../components/register/RegisterForm";

export default function Register() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        padding: "20px",
        flexDirection: "column",
      }}
    >
      <RegisterForm />
    </Box>
  );
}

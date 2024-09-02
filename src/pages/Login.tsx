import LoginForm from "../components/login/LoginForm";
import { Box } from "@mui/material";

export default function Login() {
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
      <LoginForm />
    </Box>
  );
}

import LoginForm from "../components/login/LoginForm";
import { Box } from "@mui/material";

export default function Login() {
  const user = {
    username: "admin2",
    email: "admin",
    fullName: "admin",
  };
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
      <LoginForm onClick={user} />
    </Box>
  );
}

import { Box } from "@mui/material";
import FormForgot from "../components/password/FormForgot";

export default function Forgot() {
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
      <FormForgot />
    </Box>
  );
}

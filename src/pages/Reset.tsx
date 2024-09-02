import { Box } from "@mui/material";
import FormReset from "../components/password/FormReset";
export default function Reset() {
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
      <FormReset />
    </Box>
  );
}

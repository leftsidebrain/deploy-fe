import { Button, Typography } from "@mui/material";
import CustomInput from "../common/CustomInput";
import { Link } from "react-router-dom";

export default function FormForgot() {
  return (
    <form action="" style={{ width: "25%" }}>
      <Typography variant="h3" color="#04A51E" sx={{ marginBottom: "10px" }}>
        Circle
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Forgot password
      </Typography>
      <CustomInput type="email" placeholder="email" />

      <Button variant="contained" color="success" sx={{ width: "100%", borderRadius: "50px", backgroundColor: "#04A51E", marginBottom: "20px" }}>
        Send Instruction
      </Button>
      <Typography variant="body1">
        <Link to={"/auth/login"} style={{ color: "#04A51E", textDecoration: "none" }}>
          Login
        </Link>
      </Typography>
    </form>
  );
}

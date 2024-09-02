import { Button, Typography } from "@mui/material";
import CustomInput from "../common/CustomInput";

export default function FormRiset() {
  return (
    <form action="" style={{ width: "25%" }}>
      <Typography variant="h3" color="#04A51E" sx={{ marginBottom: "10px" }}>
        Circle
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Reset password
      </Typography>
      <CustomInput type="password" placeholder="new password" />
      <CustomInput type="password" placeholder="confirm new password" />
      <Button variant="contained" color="success" sx={{ width: "100%", borderRadius: "50px", backgroundColor: "#04A51E", marginBottom: "20px" }}>
        Send Instruction
      </Button>
    </form>
  );
}

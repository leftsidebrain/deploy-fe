import { Button, FormControl, FormHelperText, Typography } from "@mui/material";
import CustomInput from "../common/CustomInput";
import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import { ILoginForm } from "../../store/types/login";
import useLoginValidation from "./hooks/useLoginValidation";
import { loginFunction } from "./hooks/useLoginFunction";

export default function LoginForm() {
  const { control, handleSubmit, reset } = useLoginValidation();
  const loginFunc = loginFunction();

  const onSubmit = async (data: ILoginForm) => {
    try {
      await loginFunc.login(data.username, data.password);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <form style={{ width: "25%" }} onSubmit={handleSubmit(onSubmit, onError)}>
      <Typography variant="h3" color="#04A51E" sx={{ marginBottom: "10px" }}>
        Circle
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Login to circle
      </Typography>

      <Controller
        control={control}
        name="username"
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={Boolean(fieldState.error)}>
            <CustomInput placeholder="Email or Username" {...field} />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={Boolean(fieldState.error)}>
            <CustomInput placeholder="Password" {...field} type="password" autoComplete="current-password" />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />

      <Button type="submit" variant="contained" color="success" sx={{ width: "100%", borderRadius: "50px", backgroundColor: "#04A51E", marginBottom: "20px" }}>
        Login
      </Button>
      <Typography variant="body1">
        Don't have an account?{" "}
        <Link to={"/auth"} style={{ color: "#04A51E", textDecoration: "none" }}>
          Register
        </Link>
      </Typography>
    </form>
  );
}

import { Button, FormControl, FormHelperText, Typography } from "@mui/material";
import CustomInput from "../common/CustomInput";
import { Link } from "react-router-dom";
import useRegisterValidation from "./hooks/useRegisterValidation";
import { Controller } from "react-hook-form";
import { IRegisterForm } from "../../store/types/register";
import { useRegisterFunction } from "./hooks/useRegisterFunction";
export default function RegisterForm() {
  const { control, handleSubmit, reset } = useRegisterValidation();
  const registerFunc = useRegisterFunction();

  const onSubmit = async (data: IRegisterForm) => {
    try {
      await registerFunc.register(data);
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
        create account circle
      </Typography>

      <Controller
        control={control}
        name="fullname"
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={Boolean(fieldState.error)}>
            <CustomInput placeholder="Fullname" {...field} />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={Boolean(fieldState.error)}>
            <CustomInput placeholder="Username" {...field} />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={Boolean(fieldState.error)}>
            <CustomInput placeholder="Email" {...field} type="email" />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={Boolean(fieldState.error)}>
            <CustomInput placeholder="Password" {...field} type="password" />
            {Boolean(fieldState.error) && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
          </FormControl>
        )}
      />

      <Button type="submit" variant="contained" color="success" sx={{ width: "100%", borderRadius: "50px", backgroundColor: "#04A51E", marginBottom: "20px" }}>
        Create
      </Button>
      <Typography variant="body1">
        Already have an account?{" "}
        <Link to={"login"} style={{ color: "#04A51E", textDecoration: "none" }}>
          Login
        </Link>
      </Typography>
    </form>
  );
}

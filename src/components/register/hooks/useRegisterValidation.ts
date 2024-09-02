import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IRegisterForm } from "../../../store/types/register";

export default function useRegisterValidation() {
  const schema = yup.object().shape({
    fullname: yup.string().required("fullname must be not empty").min(3),
    username: yup.string().required("username must be not empty").min(3),
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  return useForm<IRegisterForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
    mode: "all",
  });
}

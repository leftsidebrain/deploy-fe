import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILoginForm } from "../../../store/types/login";

export default function useLoginValidation() {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  return useForm<ILoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
  });
}

import { IRegisterForm } from "../../../store/types/register";
import * as auth from "../../../hooks/api/call/auth";

export const useRegisterFunction = () => {
  const register = async (body: IRegisterForm) => {
    try {
      const res = await auth.register(body);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return { register };
};

import { toast } from "react-toastify";
import { setAuthToken } from "../../../hooks/api";
import * as auth from "../../../hooks/api/call/auth";
import useStore from "../../../store/hooks";

export const loginFunction = () => {
  const { setUser } = useStore();
  const login = async (username: string, password: string) => {
    try {
      const resToken = await auth.login(username, password);
      const user = await auth.checkAuth(resToken.token);
      setUser({
        username: user.data.username,
        email: user.data.email,
        fullname: user.data.fullname,
        profile: {
          profile_pic: user.data.profile_pic,
          banner: user.data.banner,
          bio: user.data.bio,
        },
        id: user.data.id,
      });
      setAuthToken(resToken.token);
      localStorage.setItem("token", resToken.token);
      toast.success("login sucsess");
    } catch (error) {
      toast.error("Login failed");
      console.log(error);
    }
  };

  return { login };
};

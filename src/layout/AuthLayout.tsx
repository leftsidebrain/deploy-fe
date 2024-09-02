import { Navigate, Outlet } from "react-router-dom";
import useStore from "../store/hooks";

export default function AuthLayout() {
  const { isLogin } = useStore();
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}

import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Profile from "../components/profile";
import useStore from "../store/hooks";

export default function RootLayout() {
  const { isLogin } = useStore();
  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Box sx={{ flex: 1, height: "100vh", borderRight: "1px solid gray" }}>
        <Sidebar />
      </Box>
      <Box sx={{ flex: 2, overflowY: "auto", scrollbarWidth: "none" }}>
        <Outlet />
      </Box>
      <Box sx={{ flex: 1.5, height: "100vh", borderLeft: "1px solid gray" }}>
        <Profile />
      </Box>
    </Box>
  );
}

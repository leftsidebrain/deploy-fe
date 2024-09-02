import { Box } from "@mui/material";
import ProfileItem from "../../components/profile/ProfileItem";
import UserPost from "./UserPost";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <Box>
      <ProfileItem />
      <Outlet/>
    </Box>
  );
};

export default Users;

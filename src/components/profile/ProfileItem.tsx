import { Box, Stack, Typography } from "@mui/material";
import ProfileModal from "../common/modal/ProfileModal";
import { Link, NavLink, useParams } from "react-router-dom";
import baseUrl from "../../utils/baseURL";
import useStore from "../../store/hooks";
import { useEffect } from "react";

export default function ProfileItem() {
  const { username } = useParams();
  const { user, follower, following, countFollow } = useStore();
  const userId = user.id;

  useEffect(() => {
    countFollow(userId);
  }, [following, follower]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#262626", padding: 2, boxSizing: "border-box", borderRadius: "5px" }}>
      <Typography variant="h6" color="white" sx={{ fontWeight: "bold" }}>
        My Profile
      </Typography>
      <Box sx={{ position: "relative", width: "100%" }}>
        <img style={{ width: "100%", height: "100px", borderRadius: "5px" }} src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=sph" alt="" />
        <img style={{ width: "80px", height: "80px", borderRadius: "50%", position: "absolute", left: "20px", top: "60px", objectFit: "cover" }} src={`${baseUrl.baseUrlImg}${user.profile?.profile_pic}`} alt="" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <ProfileModal />
      </Box>
      <Box>
        <Typography variant="h5" color="white" sx={{ fontWeight: "bold" }}>
          <Link style={{ color: "white", textDecoration: "none", textTransform: "capitalize" }} to={`/users/${user.id}`}>
            {user.fullname}
          </Link>
        </Typography>
        <Typography>@{user.username}</Typography>
        <Box py={2}>
          <Typography>{user.profile?.bio || "No bio yet"}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Typography>
          <span style={{ fontWeight: "bold" }}>{following}</span> followers
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>{follower}</span> following
        </Typography>
      </Box>

      <Box>
        {username === user.username ? (
          <Box sx={{ borderBottom: "1px solid gray" }}>
            <Stack direction="row" height={"40px"} alignItems="center">
              <NavLink to={"posts"} style={{ flex: 1, color: "white", borderRadius: 0, textDecoration: "none", textAlign: "center" }}>
                Posts
              </NavLink>
              <NavLink to={"media"} style={{ flex: 1, color: "white", borderRadius: 0, textDecoration: "none", textAlign: "center" }}>
                Media
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

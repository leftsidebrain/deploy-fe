import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const FollowItem = () => {
  return (
    <Box sx={{ borderBottom: "1px solid gray" }}>
      <Typography p={2} variant="h5">
        Follow
      </Typography>
      <Stack direction="row" height={"40px"} alignItems="center">
        <NavLink to={"follower"} style={{ flex: 1, color: "white", borderRadius: 0, textDecoration: "none", textAlign: "center" }}>
          Follower
        </NavLink>
        <NavLink to={"following"} style={{ flex: 1, color: "white", borderRadius: 0, textDecoration: "none", textAlign: "center" }}>
          Following
        </NavLink>
      </Stack>
    </Box>
  );
};

export default FollowItem;

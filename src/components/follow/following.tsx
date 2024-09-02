import { useEffect, useState } from "react";
import useStore from "../../store/hooks";
import { IFollowing } from "../../store/types/follows";
import { api } from "../../hooks/api";
import { Box, Typography } from "@mui/material";
import baseUrl from "../../utils/baseURL";
import Outlined from "../common/button/Outlined";
import { useFollowFunctions } from "../../hooks/follows/useFollowsFunction";

export default function Following() {
  const { user } = useStore();

  const [users, setUsers] = useState<IFollowing[]>([]);
  const { unfollowFunc } = useFollowFunctions();
  const userList = async () => {
    const res = await api.get(`/users/following/${user.id}`);
    setUsers(res.data);
  };
  useEffect(() => {
    userList();
  }, [unfollowFunc]);
  return (
    <Box sx={{ backgroundColor: "#262626", padding: 2, boxSizing: "border-box", borderRadius: "5px", display: "flex", flexDirection: "column", gap: "15px" }}>
      {users.map((item, index) => {
        const img = `${baseUrl.baseUrlImg}${item.following.profile_pic}`;
        return (
          <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img style={{ width: "3rem", height: "3rem", objectFit: "cover", borderRadius: "45px" }} src={img} alt="" />
              <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
                <Typography sx={{ color: "white" }}>{item.following.fullname}</Typography>
                <Typography sx={{ color: "white" }}>@{item.following.username}</Typography>
              </Box>
            </Box>
            <Box>
              <Outlined
                onClick={() => {
                  // unfollowFunc(user.id, item.followingId);
                }}
              >
                {"Unfollow"}
              </Outlined>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

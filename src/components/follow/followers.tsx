import { useEffect, useState } from "react";
import useStore from "../../store/hooks";
import { api } from "../../hooks/api";
import { Box, Typography } from "@mui/material";
import Outlined from "../common/button/Outlined";
import { IFollower } from "../../store/types/follows";

export default function Followers() {
  const { user } = useStore();
  const [users, setUsers] = useState<IFollower[]>([]);
  const userList = async () => {
    const res = await api.get(`/users/follower/${user.id}`);
    setUsers(res.data);
  };
  useEffect(() => {
    userList();
  }, []);
  return (
    <Box sx={{ backgroundColor: "#262626", padding: 2, boxSizing: "border-box", borderRadius: "5px", display: "flex", flexDirection: "column", gap: "15px" }}>
      {users.map((item, index) => {
        const img = `${item.follower.profile_pic}`;
        return (
          <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img style={{ width: "3rem", height: "3rem", objectFit: "cover", borderRadius: "45px" }} src={img} alt="" />
              <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
                <Typography sx={{ color: "white" }}>{item.follower.fullname}</Typography>
                <Typography sx={{ color: "white" }}>@{item.follower.username}</Typography>
              </Box>
            </Box>
            <Box>
              <Outlined
                onClick={() => {
                  // followFunc(userId, item.id);
                }}
              >
                {"Follow"}
              </Outlined>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

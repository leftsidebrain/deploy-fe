import { Box, Typography } from "@mui/material";
import Outlined from "../common/button/Outlined";
import useStore from "../../store/hooks";
import { useEffect, useState } from "react";
import { api } from "../../hooks/api";
import { IUser } from "../../store/types/store";

export default function ProfileSuggest() {
  const { users, getUsers, user } = useStore();

  const userId = user.id;
  const [loading, setLoading] = useState(false);
  const [statusFollow, setStatusFollow] = useState<Map<number, boolean>>(new Map());

  const followFunc = async (followerId: number, followingId: number) => {
    setLoading(true);
    try {
      const res = await api.post("/follow", { followerId, followingId });
      if (res) {
        setStatusFollow((prev) => new Map(prev).set(followingId, true));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const unfollowFunc = async (followerId: number, followingId: number) => {
    setLoading(true);
    try {
      await api.post("/follow/unfollow", { followerId, followingId });
      setStatusFollow((prev) => new Map(prev).set(followingId, false));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      getUsers(userId);
    };
    fetchUsers();
  }, [userId]);

  useEffect(() => {
    const checkFollow = async (followerId: number, users: IUser[]) => {
      setLoading(true);
      try {
        const res = await api.post("/follow/check", { followerId, users });
        const followMap = new Map<number, boolean>(res.data.map((user: { id: number; isFollowing: boolean }) => [user.id, user.isFollowing]));
        const updatedStatusFollow = new Map<number, boolean>(users.map((user) => [user.id, followMap.get(user.id) || false]));
        setStatusFollow(updatedStatusFollow);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (users.length > 0) {
      checkFollow(userId, users);
    }
  }, [userId, users]);

  return (
    <Box sx={{ backgroundColor: "#262626", padding: 2, boxSizing: "border-box", borderRadius: "5px", display: "flex", flexDirection: "column", gap: "15px" }}>
      <Typography variant="h6" color="white" sx={{ fontWeight: "bold" }}>
        Suggest Person
      </Typography>
      {users.map((item, index) => {
        const img = `${item.profile_pic}`;
        const isFollowing = statusFollow.get(item.id) || false;
        return (
          <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img style={{ width: "3rem", height: "3rem", objectFit: "cover", borderRadius: "45px" }} src={img} alt="" />
              <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
                <Typography sx={{ color: "white" }}>{item.fullname}</Typography>
                <Typography sx={{ color: "white" }}>@{item.username}</Typography>
              </Box>
            </Box>
            <Box>
              <Outlined
                onClick={() => {
                  if (isFollowing) {
                    unfollowFunc(userId, item.id);
                  } else {
                    followFunc(userId, item.id);
                  }
                }}
                disabled={loading}
              >
                {isFollowing ? "unfollow" : "Follow"}
              </Outlined>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

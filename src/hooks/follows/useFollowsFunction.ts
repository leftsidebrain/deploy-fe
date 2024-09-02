import { api } from "../api";

export const useFollowFunctions = () => {
  const followFunc = async (followerId: number, followingId: number) => {
    try {
      const res = await api.post("/follow", { followerId, followingId });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowFunc = async (followerId: number, followingId: number) => {
    try {
      const res = await api.post("/follow/unfollow", { followerId, followingId });
      return res.data;
    } catch (error) {}
  };

  return { followFunc, unfollowFunc };
};

import { api } from "../api";

export const useLikeFunction = () => {
  const handleLike = async (userId: number, postId: number) => {
    try {
      const res = await api.post("/like", { userId, postId });
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnlike = async (userId: number, postId: number) => {
    try {
      const res = await api.post("/like/unlike", { userId, postId });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLike, handleUnlike };
};

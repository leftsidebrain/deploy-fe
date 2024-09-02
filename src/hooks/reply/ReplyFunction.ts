import { setAuthToken } from "./../api/index";
import useStore from "../../store/hooks";
import { api } from "../api";

export const HandleReply = () => {
  const { getRepliesByPost } = useStore();

  const createReply = async (postId: number, formData: any) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return "token not found";
      }
      setAuthToken(token);

      await api.post(`/reply/${postId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });

      getRepliesByPost(postId);
    } catch (error) {
      console.log(error);
    }
  };

  return { CreateReply: createReply };
};

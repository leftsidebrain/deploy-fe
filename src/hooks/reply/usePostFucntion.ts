import { toast } from "react-toastify";
import { api } from "../api/index";
import useStore from "../../store/hooks";

export const usePostFunction = () => {
  const { getPosts } = useStore();
  const handlePost = async (formData: any) => {
    try {
      await api.post("/posts", formData, { headers: { "Content-Type": "multipart/form-data" } });
      await getPosts();

      toast.success("Post Success");
    } catch (error) {
      console.log(error);
      toast.error("Post Failed");
    }
  };

  return { handlePost };
};

import { api } from "../api";

export const getSearch = () => {
  const getUserSearch = async (query: string) => {
    try {
      const res = await api.get(`/users/search?query=${query}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { getUserSearch };
};

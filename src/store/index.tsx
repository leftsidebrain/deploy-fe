import { createContext, useState } from "react";

import { IUser, TStore } from "./types/store";
import { api } from "../hooks/api";
import { IPost } from "./types/posts";

interface StoreProps {
  children: React.ReactNode;
}

export const Store = createContext<TStore | null>(null);

export const StoreProvider: React.FC<StoreProps> = ({ children }) => {
  const [user, setUserState] = useState<IUser>({
    username: "",
    email: "",
    fullname: "",
    profile: {
      profile_pic: "",
      banner: "",
      bio: "",
    },
    id: 0,
  });

  const [isLogin, setIsLogin] = useState(false);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);

  const setUser = (user: IUser) => {
    setUserState(user);
    setIsLogin(true);
  };
  const getPosts = async () => {
    try {
      const res = await api.get("/posts");

      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPostByUserId = async (userId: number) => {
    try {
      const res = await api.get(`/posts/${userId}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // like

  const [like, setLike] = useState(false);

  const setLikeFunc = async (postId: number, userId: number) => {
    try {
      const res = await api.post("/like", { postId, userId });

      if (res) {
        setLike(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setUnlikeFunc = async (postId: number, userId: number) => {
    try {
      const res = await api.post("/like/unlike", { postId, userId });
      if (res) {
        setLike(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // end like

  const clearUser = () => {
    setUserState({ username: "", email: "", fullname: "", id: 0, profile: { profile_pic: "", banner: "", bio: "" } });
    setIsLogin(false);
    localStorage.removeItem("token");
  };

  // users

  const [users, setUsers] = useState([]);
  const getUsers = async (userId: number) => {
    try {
      const res = await api.post("/users", { userId });
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // follow end

  // riplies

  const [replies, setReplies] = useState<IPost[]>([]);

  const getRepliesByPost = async (postId: number) => {
    const res = await api.get(`/reply/${postId}`);
    setReplies(res.data);
  };
  // end riplies


  // follow

  const[following,setFollowing]= useState(0)
  const[follower,setFollowers]= useState(0)

  const countFollow = async (userId: number) => {
    const res = await api.get(`/users/follows/${userId}`);
    setFollowers(res.data.followers);
    setFollowing(res.data.following);
  };
  // end follow

  return <Store.Provider value={{ user, isLogin, setUser, clearUser, getPosts, posts, getPostByUserId, post, setLikeFunc, setUnlikeFunc, like, users, getUsers, replies, getRepliesByPost,follower,following,countFollow }}>{children}</Store.Provider>;
};

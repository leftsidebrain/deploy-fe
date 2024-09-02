import { ICount } from "./like";
import { IPost } from "./posts.d";
export interface IStoreStates {
  user: IUser;
  isLogin: boolean;
  posts: IPost[];
  post: IPost[];
  like: boolean;
  users: IUsers[];
  replies: IPost[];
  following: number;
  follower: number;
}

export interface IStoreActions {
  setUser: (user: IUser) => void;
  getPosts: () => Promise<void>;
  getPostByUserId: (userId: number) => Promise<void>;
  clearUser: () => void;
  setLikeFunc: (postId: number, userId: number) => void;
  setUnlikeFunc: (postId: number, userId: number) => void;
  getUsers: (userId: number) => Promise<void>;
  getRepliesByPost: (postId: number) => Promise<void>;
  countFollow: (userId: number) => Promise<void>;
}

export interface IUser {
  profile?: IProfile;
  username: string;
  email: string;
  fullname: string;
  id: number;
}
export interface IUsers {
  profile_pic?: "";
  username: string;
  email: string;
  fullname: string;
  id: number;
}

export interface IProfile {
  profile_pic?: "";
  banner?: "";
  bio?: "";
}

export type TStore = IStoreStates & IStoreActions;

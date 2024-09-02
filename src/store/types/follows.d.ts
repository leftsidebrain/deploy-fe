export interface IFollower {
  follower: {
    id: number;
    username: string;
    profile_pic: string;
    fullname: string;
  };
  followingId: number;
  followerId: number;
  id: number;
}
export interface IFollowing {
  following: {
    id: number;
    username: string;
    profile_pic: string;
    fullname: string;
  };
  followingId: number;
  followerId: number;
  id: number;
}

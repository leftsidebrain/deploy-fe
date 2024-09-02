import { FC } from "react";
import FollowItem from "../../components/follow";
import { Outlet } from "react-router-dom";

interface FollowProps {}

const Follow: FC<FollowProps> = () => {
  return (
    <>
      <FollowItem />
      <Outlet />
    </>
  );
};

export default Follow;

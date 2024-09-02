import { Icon } from "@iconify/react";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStore from "../../store/hooks";
import { api } from "../../hooks/api";

export default function Like(props: any) {
  const { postId } = props;
  const IdPost = parseInt(postId, 10);
  const { user } = useStore();
  const userId = user.id;
  const [count, setCount] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  const handleLike = async () => {
    try {
      await api.post(`/like/${postId}`, { userId });
      setCount(count + 1);
      setHasLiked(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await api.delete(`like/unlike/${postId}`, { data: { userId } });
      setCount(count - 1);
      setHasLiked(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getLikeCount = async (IdPost: number) => {
      try {
        const res = await api.get(`/like/count/${IdPost}`);
        setCount(res.data.likes);
      } catch (error) {
        console.log(error);
      }
    };

    const checkIfLike = async (postId: number, userId: number) => {
      try {
        const res = await api.post(`/like/check/${postId}`, { userId });

        setHasLiked(res.data.liked);
      } catch (error) {
        console.log(error);
      }
    };
    getLikeCount(IdPost);
    checkIfLike(IdPost, userId);
  }, [IdPost]);

  return (
    <>
      <Button sx={{ ":hover": { backgroundColor: "transparent" }, width: "fit-content", minWidth: 0 }}>
        {hasLiked ? <Icon onClick={handleUnlike} style={{ color: "red" }} fontSize={25} icon={"clarity:heart-solid"}></Icon> : <Icon onClick={handleLike} style={{ color: "white" }} fontSize={25} icon={"clarity:heart-line"}></Icon>}
      </Button>
      <Typography>{count == 0 ? "" : count}</Typography>
    </>
  );
}

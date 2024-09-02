import { Icon } from "@iconify/react";
import { Box, Button, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../hooks/api";
import { IPost } from "../../store/types/posts";
import Like from "../home/Like";

export default function DetailContent() {
  const { id } = useParams();

  const paramId = Number(id);
  const [post, setPost] = useState<IPost>();

  const getDetail = async (postId: number) => {
    const res = await api.get(`/posts/detail/${postId}`);
    setPost(res.data);
  };

  useEffect(() => {
    getDetail(paramId);
  }, []);
  return (
    <Box>
      <Button onClick={() => window.history.back()} sx={{ color: "white", fontSize: "25px", ml: 2 }} startIcon={<Icon icon="mdi:arrow-left" />}>
        Status
      </Button>
      <Box sx={{ padding: 2, display: "flex", gap: 2, borderBottom: "1px solid gray" }}>
        <Box sx={{ display: "flex", alignItems: "start" }}>
          <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: 50 }} src={`${post?.author?.profile_pic}`} alt="" />
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography>{post?.author?.fullname}</Typography>
            <Typography>@{post?.author?.username}• durasi</Typography>
          </Box>
          <Typography sx={{ py: 2 }}>{post?.content}</Typography>
          {post?.images && (
            <ImageList sx={{ width: "50%" }}>
              {post?.images.map((item) => (
                <ImageListItem key={item.image}>
                  <img src={`${item.image}`} srcSet={`${item.image}`} alt={item.image} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Like postId={paramId} />
            <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon fontSize={25} icon="majesticons:comment-text-line"></Icon>
              <Typography>{post?.comments.length} Replies</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

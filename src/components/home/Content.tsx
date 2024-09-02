import { Box, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import useStore from "../../store/hooks";
import Like from "./Like";

export default function Content() {
  const navigate = useNavigate();
  const { getPosts, posts } = useStore();
  const baseUrl = import.meta.env.VITE_IMG_URL;
  useEffect(() => {
    getPosts();
  }, []);

  return posts.map((item, index) => {
    const imageUrl = item.author.profile_pic ? `${baseUrl}${item.author.profile_pic}` : "";
    return (
      <Box key={index} sx={{ padding: 2, display: "flex", gap: 2, borderBottom: "1px solid gray" }}>
        <Box sx={{ display: "flex", alignItems: "start" }}>
          <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: 50 }} src={imageUrl} alt="" />
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography>{item.author.fullname}</Typography>
            <Typography>@{item.author.username} | duration</Typography>
          </Box>
          <Typography
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
            sx={{ py: 2 }}
          >
            {item.content}
          </Typography>
          {item.images.length > 0 ? (
            <ImageList sx={{ display: "flex", width: "550px", alignItems: "center", gap: 1, marginY: 2, justifyContent: "space-around" }}>
              {item.images.map((image, index) => (
                <ImageListItem key={index}>
                  <img style={{ width: "100px", height: "100px", objectFit: "cover" }} src={`${baseUrl}${image.image}`} alt={image.image} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          ) : null}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Like postId={item.id} />
            </Stack>
            <Stack onClick={() => navigate(`/detail/${item.id}`)} direction={"row"} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon fontSize={25} icon="majesticons:comment-text-line"></Icon>
              <Typography>{item.comments.length} Replies</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  });
}

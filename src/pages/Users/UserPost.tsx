import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import useStore from "../../store/hooks";
import Like from "../../components/home/Like";

export default function userContent() {
  const navigate = useNavigate();
  const { getPostByUserId, post, user } = useStore();
  const userId = user.id;
  const baseUrl = "http://localhost:3000/uploads/";
  useEffect(() => {
    getPostByUserId(userId);
  }, []);

  return post.map((item, index) => {
    const imageUrl = item.author.profile_pic ? `${baseUrl}${item.author.profile_pic}` : "";

    return (
      <Box key={index} sx={{ padding: 2, display: "flex", gap: 2, borderBottom: "1px solid gray" }}>
        <Box sx={{ display: "flex", alignItems: "start" }}>
          <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: 50 }} src={imageUrl} alt="" />
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography>{item.author.fullname}</Typography>
            <Typography>@{item.author.username}| duration</Typography>
          </Box>
          <Typography
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
            sx={{ py: 2 }}
          >
            {item.content}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Like postId={item.id} />
            </Stack>
            <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon fontSize={25} icon="majesticons:comment-text-line"></Icon>
              <Typography onClick={() => navigate(`/detail/${item.id}`)}>{item.comments.length} Replies</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  });
}

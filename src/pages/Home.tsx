import { Box } from "@mui/material";
import Content from "../components/home/Content";
import Post from "../components/home/Post";

export default function Home() {
  return (
    <Box>
      <Post title="home" />
      <Content />
    </Box>
  );
}

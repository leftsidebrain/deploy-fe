import { Box } from "@mui/material";
import Reply from "../components/detail/Reply";
import ReplyContent from "../components/detail/ReplyContent";
import DetailContentReply from "../components/detail/DetailContentReply";

export default function DetailPost() {
  return (
    <Box>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1, backgroundColor: "#121212" }}>
        <DetailContentReply />
        <Reply />
      </Box>
      <ReplyContent />
    </Box>
  );
}

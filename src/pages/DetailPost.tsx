import { Box } from "@mui/material";
import DetailContent from "../components/detail/DetailContent";
import Reply from "../components/detail/Reply";
import ReplyContent from "../components/detail/ReplyContent";

export default function DetailPost() {
  return (
    <Box>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1, backgroundColor: "#121212" }}>
        <DetailContent />

        <Reply />
      </Box>
      <ReplyContent />
    </Box>
  );
}

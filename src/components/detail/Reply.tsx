import { Box } from "@mui/material";
import useStore from "../../store/hooks";
import ReplyModal from "./ReplyModal";

export default function Reply() {
  const { user } = useStore();
  return (
    <Box sx={{ padding: 2, boxSizing: "border-box", borderBottom: "1px solid gray", position: "sticky", top: 0, backgroundColor: "#121212" }}>
      <Box sx={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%" }} src={`${user.profile?.profile_pic}`} alt="" />

          <ReplyModal />
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import PostModal from "../common/modal/PostModal";
import baseUrl from "../../utils/baseURL";
import useStore from "../../store/hooks";

export default function Post(props: any) {
  const { title } = props;
  const { user } = useStore();

  return (
    <Box sx={{ padding: 2, boxSizing: "border-box", borderBottom: "1px solid gray", position: "sticky", top: 0, backgroundColor: "#121212", zIndex: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} mb={4}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: 50 }} src={`${baseUrl.baseUrlImg}${user.profile?.profile_pic}`} alt="" />

          <PostModal />
        </Box>
      </Box>
    </Box>
  );
}

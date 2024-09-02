import { Box } from "@mui/material";
import baseUrl from "../../utils/baseURL";
import useStore from "../../store/hooks";

export default function ItemProfile() {
  const { user } = useStore();
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: 50 }} src={`${baseUrl.baseUrlImg}${user.profile?.profile_pic}`} alt="" />
      <input type="text" placeholder="What's happening tho?" style={{ backgroundColor: "transparent", border: "none", outline: "none", width: "100%", caretColor: "white", color: "white" }} />
    </Box>
  );
}

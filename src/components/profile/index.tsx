import { Box } from "@mui/material";
import ProfileItem from "./ProfileItem";
import ProfileSuggest from "./ProfileSuggest";
import useStore from "../../store/hooks";
import { useParams } from "react-router-dom";

export default function ProfileBar() {
  const { user } = useStore();
  const { username } = useParams();

  if (username == user?.username) {
    return (
      <Box sx={{ padding: 2, boxSizing: "border-box" }}>
        <Box>
          <ProfileSuggest />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ padding: 2, boxSizing: "border-box" }}>
        <Box mb={2}>
          <ProfileItem />
        </Box>
        <Box>
          <ProfileSuggest />
        </Box>
      </Box>
    );
  }
}

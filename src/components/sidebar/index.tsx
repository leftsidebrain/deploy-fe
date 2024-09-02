import { Box, Button, Typography } from "@mui/material";
import NavItem from "./NavItem";
import { Icon } from "@iconify/react";
import useStore from "../../store/hooks";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { usePostFunction } from "../../hooks/posts/getPostFucntion";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function Sidebar() {
  const { clearUser } = useStore();
  const { user } = useStore();
  const [open, setOpen] = useState(false);
  const [imgaesPost, setImagesPost] = useState<any>(null);
  const { handlePost } = usePostFunction();
  const [content, setContent] = useState("");

  const handleFileChange = (e: any) => {
    setImagesPost(e.target.files);
  };

  const controlPost = async () => {
    const formData = new FormData();

    if (content) formData.append("content", content);
    if (imgaesPost)
      for (let i = 0; i < imgaesPost.length; i++) {
        formData.append("images", imgaesPost[i]);
      }
    await handlePost(formData);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", padding: 3, gap: 1, boxSizing: "border-box" }}>
      <Typography variant="h4" color="#04A51E" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        TRIANGLE
      </Typography>
      <NavItem />
      <Button variant="contained" sx={{ width: "100%", backgroundColor: "#04A51E", color: "white", textTransform: "none", fontWeight: "bold", borderRadius: 10, padding: 1, marginBottom: 1 }} onClick={handleOpen}>
        Create Post
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: "40%", height: "30%", borderRadius: "10px", position: "relative" }}>
          <Box sx={{ padding: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                controlPost();
                setContent("");
                setImagesPost(null);
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: 50 }} src={`${user.profile?.profile_pic}`} alt="" />
                  <input
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    type="text"
                    placeholder="What's happening tho?"
                    style={{ backgroundColor: "transparent", border: "none", outline: "none", width: "100%", caretColor: "white", color: "white" }}
                  />
                </Box>
                <Icon onClick={handleClose} style={{ cursor: "pointer", position: "absolute", right: 10, top: 10 }} color="#ffff" icon={"solar:close-circle-outline"} fontSize={"25px"} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid gray", paddingTop: 2 }}>
                <input type="file" multiple accept="image/*" onChange={handleFileChange} />
                <Button type="submit" variant="contained" color="success" size="small" sx={{ borderRadius: "50px", backgroundColor: "#04A51E", color: "white" }}>
                  Post
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>

      <Button
        onClick={() => clearUser()}
        startIcon={<Icon icon="solar:logout-2-outline" />}
        sx={{
          mt: "auto",
          color: "white",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        variant="text"
      >
        Logout
      </Button>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Icon } from "@iconify/react";
import { Button, TextField, Typography } from "@mui/material";
import Outlined from "../button/Outlined";
import { useState } from "react";
import useStore from "../../../store/hooks";
import { api } from "../../../hooks/api";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function ProfileModal() {
  const { user, setUser, getPosts } = useStore();
  const userId = user.id;
  const img = user.profile?.profile_pic;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setProfilePicture(file);

    // Preview gambar sebelum diunggah
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const [preview, setPreview] = useState<string | null>(null);
  const [profilePicture, setProfilePicture] = useState(null);

  const [fullname, setFullname] = useState("");
  const [username, setusername] = useState("");
  const [bio, setbio] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    if (fullname) formData.append("fullname", fullname);
    if (username) formData.append("username", username);
    if (bio) formData.append("bio", bio);

    if (profilePicture) formData.append("file", profilePicture);

    try {
      const user = await api.patch(`/users/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUser({
        username: user.data.username,
        email: user.data.email,
        fullname: user.data.fullname,
        profile: {
          profile_pic: user.data.profile_pic,
          banner: user.data.banner,
          bio: user.data.bio,
        },
        id: user.data.id,
      });

      await getPosts();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Outlined onClick={handleOpen}>Edit Profile</Outlined>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: "30%", borderRadius: "10px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", position: "relative", gap: 1, padding: 2 }}>
            <form
              onSubmit={() => {
                handleSubmit;
                setPreview("");
                setProfilePicture(null);
                setOpen(false);
              }}
            >
              <Typography>Edit Profile</Typography>
              <Icon onClick={handleClose} style={{ cursor: "pointer", position: "absolute", right: 16 }} color="#ffff" icon={"solar:close-circle-outline"} fontSize={"20px"} />
              <Box sx={{ position: "relative", mb: 3 }}>
                <img
                  style={{ width: "100%", height: "120px", borderRadius: "5px" }}
                  src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=sph"
                  alt="profile picture"
                />

                <img style={{ width: "60px", height: "60px", borderRadius: "50%", position: "absolute", left: 10, bottom: -20, border: "3px solid #1d1d1d", objectFit: "cover" }} src={img} alt="profile picture" />
                {preview && <img src={preview} alt="Preview" style={{ position: "absolute", left: 10, bottom: -20, width: "60px", height: "60px", objectFit: "cover", borderRadius: "50%" }} />}
              </Box>
              <Box sx={{ py: 2 }}>
                <input type="file" placeholder="Upload" onChange={handleFileChange} />
              </Box>
              <Box sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
                <TextField
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  value={fullname}
                  id="outlined-basic"
                  label="fullname"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <TextField
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  value={username}
                  id="outlined-basic"
                  label="username"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <TextField
                  onChange={(e) => {
                    setbio(e.target.value);
                  }}
                  value={bio}
                  id="outlined-basic"
                  label="Bio"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Box>
            </form>
          </Box>
          <Box sx={{ mt: 2, borderTop: "1px solid white", padding: 2, display: "flex", justifyContent: "end" }}>
            <Button type="submit">Save</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

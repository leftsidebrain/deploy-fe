import { ImageList, ImageListItem } from "@mui/material";

import { useEffect, useState } from "react";

import useStore from "../../store/hooks";
import { api } from "../../hooks/api";
import { IMedia } from "../../store/types/media";
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function userContent() {
  const { user } = useStore();
  const userId = user.id;
  const baseUrl = "http://localhost:3000/uploads/";
  const [media, setMedia] = useState<IMedia[]>([]);
  const getMedia = async () => {
    const res = await api.get(`/posts/media/${userId}`);
    setMedia(res.data);
  };

  useEffect(() => {
    getMedia();
  }, []);

  // const imageUrl = item.author.profile_pic ? `${baseUrl}${item.author.profile_pic}` : "";
  return media.map((item, index) =>
    item.images.length > 0 ? (
      <ImageList sx={{ width: "100%", height: "110%", mb: 2 }} variant="quilted" cols={3} rowHeight={121} key={index}>
        {item.images.map((image, index) => (
          <ImageListItem key={index} cols={1} rows={2}>
            <img {...srcset(image.image, 121, 1, 1)} src={`${baseUrl}${image.image}`} alt={image.image} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    ) : null
  );

  //
}

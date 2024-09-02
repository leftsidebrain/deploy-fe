import { Button } from "@mui/material";

export default function Contained(props: any) {
  const { children, color, size, type } = props;
  return (
    <Button type={type} variant="contained" size={size} color={color} sx={{ borderRadius: "50px", backgroundColor: "#04A51E", color: "white", textTransform: "capitalize" }}>
      {children}
    </Button>
  );
}
